import { useState, useMemo, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './table';
import { Input } from './input';
import { Button } from './button';
import { Checkbox } from './checkbox';
import Select from './select';
import { Badge } from './badge';
import { 
  MagnifyingGlass,
  CaretUp,
  CaretDown, 
  CaretLeft,
  CaretRight,
  Funnel,
  Columns,
  // X
} from '@phosphor-icons/react';

export interface DataTableColumn<T = any> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  align?: 'left' | 'center' | 'right';
  render?: (value: any, row: T, index: number) => ReactNode;
}

export interface DataTableProps<T = any> {
  data?: T[];
  columns?: DataTableColumn<T>[];
  className?: string;
  searchable?: boolean;
  filterable?: boolean;
  sortable?: boolean;
  selectable?: boolean;
  paginated?: boolean;
  pageSize?: number;
}

export interface SortConfig {
  key: string | null;
  direction: 'asc' | 'desc' | null;
}

const DataTable = <T extends Record<string, any> = any>({ 
  data = [], 
  columns = [], 
  className,
  searchable = true,
  filterable = true,
  sortable = true,
  selectable = true,
  paginated = true,
  pageSize = 10
}: DataTableProps<T>) => {
  const [search, setSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [hiddenColumns, setHiddenColumns] = useState<Set<string>>(new Set());
  const [showColumnSelector, setShowColumnSelector] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Colonnes visibles
  const visibleColumns = useMemo(() => 
    columns.filter(col => !hiddenColumns.has(String(col.key)))
  , [columns, hiddenColumns]);

  // Données filtrées et triées
  const processedData = useMemo(() => {
    let result = [...data];

    // Recherche textuelle sur la première colonne visible
    if (search && visibleColumns.length > 0) {
      const searchColumn = visibleColumns[0];
      result = result.filter(row => {
        const value = row[searchColumn.key];
        return String(value).toLowerCase().includes(search.toLowerCase());
      });
    }

    // Filtres
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') {
        result = result.filter(row => {
          const rowValue = String(row[key]).toLowerCase();
          const filterValue = String(value).toLowerCase();
          return rowValue.includes(filterValue);
        });
      }
    });

    // Tri
    if (sortConfig.key) {
      result.sort((a, b) => {
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];
        
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return result;
  }, [data, search, filters, sortConfig, visibleColumns]);

  // Pagination
  const totalPages = Math.ceil(processedData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = processedData.slice(startIndex, startIndex + pageSize);

  // Gestion du tri
  const handleSort = (key: string) => {
    if (!sortable) return;
    
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  // Gestion de la sélection
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(paginatedData.map((_, index) => startIndex + index)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (index: number, checked: boolean) => {
    const globalIndex = startIndex + index;
    const newSelected = new Set(selectedRows);
    
    if (checked) {
      newSelected.add(globalIndex);
    } else {
      newSelected.delete(globalIndex);
    }
    
    setSelectedRows(newSelected);
  };

  // Gestion des colonnes
  const toggleColumn = (columnKey: string) => {
    const newHidden = new Set(hiddenColumns);
    if (newHidden.has(columnKey)) {
      newHidden.delete(columnKey);
    } else {
      newHidden.add(columnKey);
    }
    setHiddenColumns(newHidden);
  };

  // Options de filtres uniques pour chaque colonne
  const getFilterOptions = (columnKey: string) => {
    const uniqueValues = [...new Set(data.map(row => row[columnKey]))];
    return uniqueValues.filter(val => val != null && val !== '');
  };

  const getSortIcon = (columnKey: string) => {
    if (sortConfig.key !== columnKey) {
      return <div className="w-4 h-4" />; // Espace pour maintenir l'alignement
    }
    return sortConfig.direction === 'asc' 
      ? <CaretUp size={16} className="text-primary" weight="fill" />
      : <CaretDown size={16} className="text-primary" weight="fill" />;
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {/* Recherche */}
          {searchable && (
            <div className="relative">
              <MagnifyingGlass size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={`Rechercher dans ${visibleColumns[0]?.label || 'données'}...`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          )}

          {/* Toggle filtres */}
          {filterable && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Funnel size={16} weight="duotone" />
              Filtres
              {Object.values(filters).some(v => v && v !== 'all') && (
                <Badge variant="secondary" className="ml-1 px-1.5 py-0.5 text-xs">
                  {Object.values(filters).filter(v => v && v !== 'all').length}
                </Badge>
              )}
            </Button>
          )}

          {/* Sélecteur de colonnes */}
          <div className="relative">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowColumnSelector(!showColumnSelector)}
              className="gap-2"
            >
              <Columns size={16} weight="duotone" />
              Colonnes
            </Button>
            
            {showColumnSelector && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg z-10">
                <div className="p-2">
                  <p className="text-xs font-medium text-foreground mb-2">Affichage des colonnes</p>
                  {columns.map(column => (
                    <label key={String(column.key)} className="flex items-center gap-2 p-1 hover:bg-muted rounded">
                      <Checkbox
                        checked={!hiddenColumns.has(String(column.key))}
                        onCheckedChange={(checked) => !checked && toggleColumn(String(column.key))}
                      />
                      <span className="text-sm">{column.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Informations */}
        <div className="text-sm text-muted-foreground">
          {selectedRows.size > 0 && (
            <span className="mr-4">
              {selectedRows.size} ligne{selectedRows.size > 1 ? 's' : ''} sélectionnée{selectedRows.size > 1 ? 's' : ''}
            </span>
          )}
          <span>
            {processedData.length} résultat{processedData.length > 1 ? 's' : ''}
            {data.length !== processedData.length && ` sur ${data.length}`}
          </span>
        </div>
      </div>

      {/* Filtres */}
      {showFilters && filterable && (
        <div className="p-4 bg-muted/50 rounded-lg border border-border">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-foreground">Filtres</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilters({})}
              className="text-xs"
            >
              Réinitialiser
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visibleColumns.filter(col => col.filterable !== false).map(column => (
              <div key={String(column.key)}>
                <label className="block text-xs font-medium text-muted-foreground mb-1">
                  {column.label}
                </label>
                <Select
                  value={filters[String(column.key)] || 'all'}
                  onChange={(value) => setFilters(prev => ({ ...prev, [String(column.key)]: value }))}
                  options={[
                    { value: 'all', label: 'Tous' },
                    ...getFilterOptions(String(column.key)).map(option => ({
                      value: String(option),
                      label: String(option)
                    }))
                  ]}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            {selectable && (
              <TableHead className="w-12">
                <Checkbox
                  checked={paginatedData.length > 0 && paginatedData.every((_, index) => 
                    selectedRows.has(startIndex + index)
                  )}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
            )}
            
            {visibleColumns.map(column => (
              <TableHead 
                key={String(column.key)} 
                className={cn(
                  column.sortable !== false && sortable ? "cursor-pointer hover:bg-muted/50" : "",
                  column.align === 'center' && "text-center",
                  column.align === 'right' && "text-right"
                )}
                onClick={() => column.sortable !== false && handleSort(String(column.key))}
              >
                <div className="flex items-center gap-2">
                  <span>{column.label}</span>
                  {column.sortable !== false && sortable && getSortIcon(String(column.key))}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.length === 0 ? (
            <TableRow>
              <TableCell 
                colSpan={visibleColumns.length + (selectable ? 1 : 0)} 
                className="text-center py-8 text-gray-500"
              >
                Aucune donnée trouvée
              </TableCell>
            </TableRow>
          ) : (
            paginatedData.map((row, index) => (
              <TableRow 
                key={index}
                className={selectedRows.has(startIndex + index) ? 'bg-primary-50' : ''}
              >
                {selectable && (
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.has(startIndex + index)}
                      onCheckedChange={(checked) => handleSelectRow(index, checked)}
                    />
                  </TableCell>
                )}
                
                {visibleColumns.map(column => (
                  <TableCell 
                    key={String(column.key)}
                    className={cn(
                      column.align === 'center' && "text-center",
                      column.align === 'right' && "text-right"
                    )}
                  >
                    {column.render 
                      ? column.render(row[column.key], row, index)
                      : String(row[column.key] || '')
                    }
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      {paginated && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground/70">
            Affichage de <span className="font-medium">{startIndex + 1}</span> à{' '}
            <span className="font-medium">
              {Math.min(startIndex + pageSize, processedData.length)}
            </span>{' '}
            sur <span className="font-medium">{processedData.length}</span> résultats
          </p>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <CaretLeft size={16} />
              Précédent
            </Button>
            
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNumber;
                if (totalPages <= 5) {
                  pageNumber = i + 1;
                } else if (currentPage <= 3) {
                  pageNumber = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNumber = totalPages - 4 + i;
                } else {
                  pageNumber = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(pageNumber)}
                    className="w-8 h-8 p-0"
                  >
                    {pageNumber}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Suivant
              <CaretRight size={16} />
            </Button>
          </div>
        </div>
      )}

      {/* Overlay pour fermer les dropdowns */}
      {showColumnSelector && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setShowColumnSelector(false);
          }}
        />
      )}
    </div>
  );
};

export default DataTable;
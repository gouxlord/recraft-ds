
import { Card, CardContent } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Eye, PencilSimple, Trash } from '@phosphor-icons/react';

const TablesSection = () => {
  const tableData = [
    { id: 1, name: 'Marie Dupont', role: 'RH Manager', department: 'Ressources Humaines', status: 'active' },
    { id: 2, name: 'Jean Martin', role: 'Développeur Senior', department: 'Tech', status: 'active' },
    { id: 3, name: 'Sophie Bernard', role: 'Product Manager', department: 'Product', status: 'leave' },
    { id: 4, name: 'Pierre Durand', role: 'Designer UX', department: 'Design', status: 'active' },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Table</h2>
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Département</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={row.status === 'active' ? 'success' : 'warning'}
                    >
                      {row.status === 'active' ? 'Actif' : 'En congé'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Eye size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <PencilSimple size={16} />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Trash size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  );
};

export default TablesSection;
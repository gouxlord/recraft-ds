
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import DataTable from '../ui/data-table';
import { Badge } from '../ui/badge';

const DataTableSection = () => {
  const data = [
    { 
      id: 1, 
      name: 'Marie Dupont', 
      role: 'RH Manager', 
      department: 'Ressources Humaines',
      status: 'active',
      salary: '65000€',
      joinDate: '2020-01-15',
      location: 'Paris',
      experience: '8 ans'
    },
    { 
      id: 2, 
      name: 'Pierre Martin', 
      role: 'Développeur Senior', 
      department: 'IT',
      status: 'active',
      salary: '75000€',
      joinDate: '2019-03-22',
      location: 'Lyon',
      experience: '10 ans'
    },
    { 
      id: 3, 
      name: 'Sophie Bernard', 
      role: 'Designer UI/UX', 
      department: 'Design',
      status: 'leave',
      salary: '58000€',
      joinDate: '2021-06-10',
      location: 'Paris',
      experience: '5 ans'
    },
    { 
      id: 4, 
      name: 'Thomas Leroy', 
      role: 'Chef de Projet', 
      department: 'Gestion de Projet',
      status: 'active',
      salary: '68000€',
      joinDate: '2018-11-05',
      location: 'Toulouse',
      experience: '12 ans'
    },
    { 
      id: 5, 
      name: 'Julie Moreau', 
      role: 'Analyste Business', 
      department: 'Stratégie',
      status: 'active',
      salary: '62000€',
      joinDate: '2022-02-14',
      location: 'Paris',
      experience: '6 ans'
    },
    { 
      id: 6, 
      name: 'Laurent Petit', 
      role: 'Développeur Frontend', 
      department: 'IT',
      status: 'active',
      salary: '55000€',
      joinDate: '2023-01-20',
      location: 'Marseille',
      experience: '3 ans'
    },
    { 
      id: 7, 
      name: 'Camille Robert', 
      role: 'Responsable Marketing', 
      department: 'Marketing',
      status: 'leave',
      salary: '70000€',
      joinDate: '2020-08-12',
      location: 'Lyon',
      experience: '9 ans'
    },
    { 
      id: 8, 
      name: 'Nicolas Durand', 
      role: 'Comptable', 
      department: 'Finance',
      status: 'active',
      salary: '48000€',
      joinDate: '2021-04-03',
      location: 'Paris',
      experience: '4 ans'
    },
    { 
      id: 9, 
      name: 'Émilie Blanc', 
      role: 'Consultante', 
      department: 'Conseil',
      status: 'active',
      salary: '72000€',
      joinDate: '2019-09-30',
      location: 'Nice',
      experience: '11 ans'
    },
    { 
      id: 10, 
      name: 'Julien Fournier', 
      role: 'Ingénieur DevOps', 
      department: 'IT',
      status: 'active',
      salary: '78000€',
      joinDate: '2020-05-18',
      location: 'Bordeaux',
      experience: '7 ans'
    },
    { 
      id: 11, 
      name: 'Céline Garnier', 
      role: 'Juriste', 
      department: 'Juridique',
      status: 'leave',
      salary: '65000€',
      joinDate: '2022-07-25',
      location: 'Paris',
      experience: '8 ans'
    },
    { 
      id: 12, 
      name: 'Antoine Roux', 
      role: 'Data Analyst', 
      department: 'IT',
      status: 'active',
      salary: '60000€',
      joinDate: '2023-03-15',
      location: 'Lyon',
      experience: '2 ans'
    }
  ];

  const columns = [
    { 
      key: 'name', 
      label: 'Nom complet',
      render: (value: any, _row: any) => (
        <div className="font-medium text-gray-900">{value}</div>
      )
    },
    { 
      key: 'role', 
      label: 'Poste'
    },
    { 
      key: 'department', 
      label: 'Département'
    },
    { 
      key: 'status', 
      label: 'Statut',
      render: (value: any) => (
        <Badge 
          variant={value === 'active' ? 'success' : 'warning'}
        >
          {value === 'active' ? 'Actif' : 'En congé'}
        </Badge>
      )
    },
    { 
      key: 'salary', 
      label: 'Salaire',
      align: 'right' as const,
      render: (value: any) => (
        <span className="font-mono text-sm font-medium">{value}</span>
      )
    },
    { 
      key: 'location', 
      label: 'Localisation'
    },
    { 
      key: 'experience', 
      label: 'Expérience',
      align: 'center' as const
    },
    { 
      key: 'joinDate', 
      label: 'Date d\'embauche',
      render: (value: any) => new Date(value).toLocaleDateString('fr-FR')
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-6">DataTable avancée</h2>
      <Card>
        <CardHeader>
          <CardTitle>Table de données interactive</CardTitle>
          <CardDescription>
            Table avec recherche, filtres, tri, sélection, pagination et gestion des colonnes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable
            data={data}
            columns={columns}
            searchable={true}
            filterable={true}
            sortable={true}
            selectable={true}
            paginated={true}
            pageSize={5}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default DataTableSection;
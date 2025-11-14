import { DataTable } from '../app/campaigns/data-table'
import { useQuery } from '@tanstack/react-query'
import { type Campaign } from '@/types/campaign'
import { useColumnsWithActions } from '../app/campaigns/columns-with-actions'

export function FetchAdsCampaigns() {  
  const { data, isPending, error, refetch } = useQuery<Campaign[]>({
      queryKey: ['campaigns'],
      queryFn: () => fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns')
      .then(response => response.json()),
  })

  const { columns, editDialog, deleteDialog } = useColumnsWithActions({
    onEditSuccess: () => {
      refetch(); // Recarrega os dados após edição
    },
    onDeleteSuccess: () => {
      refetch(); // Recarrega os dados após exclusão
    }
  });

  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
      {editDialog}
      {deleteDialog}
    </div>
  )
}

import { type ColumnDef } from "@tanstack/react-table"

export type User = {
    id: string
    name: string
    username: string
    email: string
}

export const columns: ColumnDef<User>[] = [
    
]
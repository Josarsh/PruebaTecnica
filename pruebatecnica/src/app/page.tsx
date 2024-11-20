"use client"
import {useGetUsersQuery} from "@/redux/services/api";
function HomePage() {
  const {data,error,isLoading,isFetching} =useGetUsersQuery(null)
  if (isLoading||isFetching) return <p>Cargando...</p>
  if (error) return <p>Ocurrio un error</p>
  return (
    <div>
      <div  className="grid grid-cols-3"> {
        data?.map(user=>(
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default HomePage

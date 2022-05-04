import useInvestContext from "../../hooks/useInvestContext"

export const ListItem = ({ entry }: { entry: string }) => {
  const { setId } = useInvestContext()

  return  (
    <button 
      id= { entry }
      onClick={e => setId(e.currentTarget.id) }
    >{ entry }</button>
  )  
}

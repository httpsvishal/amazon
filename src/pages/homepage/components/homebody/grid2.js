import girdInfo from '../../../../AMAZON DATA/grids/row2.json';
import GridCard from "../grid"

const Grid2 = () => {
    return(
        <div className='grid-layout'>
            {
                girdInfo.map((info)=>{
                    return (
                        <GridCard key={info.id} data={info} />
                    )
                })
            }
        </div>
    )
}
export default Grid2;
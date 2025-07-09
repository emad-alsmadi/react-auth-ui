import { useState } from 'react';
import { sculptureList } from './dataTrainStateDocs';
// import sculptureList from './dataTrainStateDocs';
// خطأ استدعاءه لانه ال sculptureList ليست مستوردة ك default  بل هيا function  لذلك يجب وضغ  {}

const App = () => {
    const [count, setCount] = useState(0);
    const [showMore, setShowMore] = useState(false);
    let sculpture = sculptureList[count];

    const hasNext = count < sculptureList.length - 1;
    const handleNextClick = () => {
        if (hasNext) {
            setCount(count + 1);
        }
        else {
            setCount(0);
        }
    }
    const handleShowMore = () => {
        setShowMore(!showMore);
    }
    return (
        <>
            <div className=' d-flex align-items-center flex-column mt-5'>
                <button className='btn btn-dark p-2 mb-3' onClick={handleNextClick}> Next </button>
                <br />
                {sculpture.name}
                <br />
                <p>{`( ${count} of ${sculptureList.length} )`}</p>
                <button className='btn btn-secondary' onClick={handleShowMore}>{showMore ? 'hidden' : 'show'} details</button>
                {showMore && <div className='m-5' style={{ width: '700px' }}> {sculpture.description}</div>}
                <img style={{ width: "100px", height: "100px", margin: "20px" }} src={sculpture.url} alt={sculpture.alt} />
            </div>
        </>
    );
}
export default App;
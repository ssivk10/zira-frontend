import '../pages/styles.css';

export default function Issue() {
    let newIssueReq = true;
    var issueName='todo';
    async function openNewIssue() {
        newIssueReq = !newIssueReq;
    }
    async function newIssue(event) {
        if (event.key === 'Enter')
            alert('wooo');
        else
            //alert('woo but not new woo');
            console.log(event.key);
    }

    return (
        <div className='App'>
            <div className="card" style={{ width: '18rem', border: '2px solid lightgray' }}>
                <div className="card-header" style={{ alignContent: 'end' }}><button className='btn btn-light'>:</button></div>
                <div className="card-body">
                    <h6 className="card-title" style={{ textAlign: 'right', color: 'gray' }}>{issueName}</h6>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <button className="btn" onClick={openNewIssue}>Create issue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</button>
                    {newIssueReq == true ? (
                        <textarea type="text" className='form-control' onKeyUp={(event) => { newIssue(event) }}></textarea>
                    ) : (
                        <p>{newIssueReq} um</p>
                    )}
                </div>
            </div>
        </div>
    );
}
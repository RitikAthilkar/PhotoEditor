import img from './img1.jpg';
function Download(){
    // var name=1234
    return(
        <div className='Download'>
        <a href={img} download="download">Download</a>
        </div>
    )
}

export default Download;
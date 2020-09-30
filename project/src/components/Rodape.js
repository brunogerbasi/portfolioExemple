import React from 'react'

const Rodape = props => {
    return(
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
            <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado para estudos de ReactJS<a href="http://brunogerbasi.pt" title="Bruno Gerbasi">www.brunogerbasi.pt</a></p>
            <p>Bootstrap Theme Made By <a href="https://www.w3schools.com" title="Visit w3schools">www.w3schools.com</a></p>
        </footer>
    )

}

export default Rodape
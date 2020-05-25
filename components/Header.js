import Head from 'next/head'

export default function(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="logoText" href="#">
                    Puuwto
                    <span>.</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="menuUl">
                        <li className="menuLi active">
                            <a className="menuA" href="#">Home</a>
                        </li>
                        <li className="menuLi ">
                            <a className="menuA" href="#">Blog</a>
                        </li>
                        <li className="menuLi">
                            <a className="menuA" href="#">Apps</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
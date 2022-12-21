import React from 'react'

const Navbar = () => {
  return (
    <header id="header">
            <div class="container">
                <nav class="navbar navbar-expand-lg p-0">
                    <div id="logo" class="pull-left">
                        <h1>
                            <a href="" class="scrollto navbar-brand" title="Happy Wedding">
                                <img src="happy-wedding-app-logo-02.png" title="Happy Wedding App" alt="Happy Wedding App" />
                            </a>
                        </h1>
                    </div>
                    <div id="nav-menu-container" class="ml-auto">
                                                    <ul class="nav-menu" >
                                <li class='nav-item'><a href="#home">Home</a></li>
                                <li class='nav-item'><a href="#about_us">About Us</a></li>
                                <li class='nav-item'><a class='nav-link' href='#love'>Love Story</a></li><li class='nav-item'><a class='nav-link' href='#gallery'>Gallery</a></li><li class='nav-item'><a class='nav-link' href='#family'>Family</a></li><li class='nav-item'><a class='nav-link' href='#events'>Events</a></li>                                <li><a href="AmitVaghasiya-DharaSakhiya.html#footer">Download App</a></li>
                            </ul>
                            
                    </div>
                </nav>
            </div>
        </header>
  )
}

export default Navbar


const NavBar = () => {
    return (
        <div>
            <nav class=" flex justify-between mx-15">
                <h3>NavBar</h3>
                <ul class="flex">
                    <li class="mr-10"> <a href="/home"></a> home </li>
                    <li class="mr-10"><a href="/about"></a> About</li>
                    <li class="mr-10"><a href="/signin">Sign In</a></li>
                    <li class="mr-10"><a href="/blogs">Blogs</a></li>
                </ul>
                <button>sign in</button>
            </nav>

        </div>
    );
};

export default NavBar;
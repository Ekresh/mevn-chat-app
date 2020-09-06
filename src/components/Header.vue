<template>
    <header>
        <span>
            <router-link class="ripple" to="/">Chat</router-link>
        </span>
        <nav>
            <ul>
                <li>
                    <router-link class="ripple" to="/">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-people" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                        </svg>
                        Users
                    </router-link>
                </li>
                <li>
                    <router-link class="ripple" to="/my-message">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-envelope" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                        Message
                    </router-link>
                </li>
                <li>
                    <router-link class="ripple" to="/profile">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>
                        Profile
                    </router-link>
                </li>
                <!-- <li>
                    <router-link class="ripple" to="register">Register</router-link>
                </li> -->
                <li>
                    <router-link class="ripple" to="/login">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-unlock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 0 0-.224.296 1.626 1.626 0 0 0-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 0 0 .436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 0 0 .224-.296 1.627 1.627 0 0 0 .138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 0 0-.255-.237A1.122 1.122 0 0 0 9.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                        </svg>
                        Login
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 300px;
    height: 100vh;
    text-align: center;
    box-shadow: 3px 0 3px -3px #333;
}
ul {
    padding-left: 0;
}
a, a:hover {
    display: inline-block;
    padding: 12px 18px;
    border-radius: 0.3em;
    color: var(--p-color);
}
.router-link-exact-active, .router-link-exact-active:hover {
    color: var(--main-color);
}
span a, span a:hover {
    font-size: 30px;
    font-family: medium;
    display: block;
    width: 100px;
    color: var(--main-color);
}
span {
    text-align: left;
}
svg {
    font-size: 17px;
}
@media (max-width: 750px) {
    header {
        height: auto;
        width: 100%;
        box-shadow: 0 3px 3px -3px #333;
    }
    nav {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        box-shadow: 0 -3px 3px -3px #333;
    }
    ul {
        display: flex;
        margin-bottom: 0;
        justify-content: space-around;
        padding-left: 15px;
        padding-right: 15px;
    }
    nav a, nav a:hover {
        font-size: 11px;
        padding: 8px 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    span a, span a:hover {
        padding-top: 5px !important;
        padding-bottom: 5px !important;
        display: inline;
    }
    span {
        text-align: center;
    }
    svg {
        display: block;
        font-size: 25px;
    }
}
</style>
<template>
    <header>
        <div id="LogoWrapper">
            <img src="../../assets/logo.webp" alt="이미지">
            <div>나무</div>
        </div>
        <div id="SearchBar">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
            <input type="text" placeholder="Search">
        </div>
        <button>Sign Up</button>
    </header>
</template>
<script>
export default{
    
}

</script>

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center; 
    height: 60px;
    position: relative;
    border-bottom: 1px solid black;
    padding: 0 15px;
}

#LogoWrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}
#LogoWrapper img {
    width: 40px;
    height: 40px;
}
#LogoWrapper div {
    font-size: 40px;
    font-weight: bold;
    color: gray;
}

#SearchBar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
    max-width: 500px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 20px;
}
#SearchBar {
    padding : 0 10px;
}
#SearchBar input {
    flex: 1;
    height: 30px;
    padding: 5px 5px;
    border: none;
    outline: none;
}

button {
    padding: 8px 16px;
    background-color: rgb(94,111,75);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(74, 87, 59);
}

body {
    margin: 0;
}
</style>
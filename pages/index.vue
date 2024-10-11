<template>
    <div class="h-full flex justify-center items-center">
        <div class="w-full  mx-5" id="about-page">
            <header>
                <h1 class="text-3xl pb-5">Hi, I’m Yanan 👋</h1>
            </header>
            <div class="text-sm py-5">
                <p>I'm a <b>Front-end Software Engineer</b> with a passion for creating intuitive and dynamic web
                    experiences.</p>
                <div class="py-5">
                    <li>I specialize in JavaScript, but I’m always eager to explore new technologies.</li>
                    <li>When I’m not coding, you'll find me traveling the world or immersed in sewing projects.</li>
                </div>
                <p>Let’s connect and build something amazing together!</p>
            </div>

            <footer>
                <div class="inline-flex gap-4">
                    <NuxtLink to="https://github.com/lyuya" target="_blank">
                        <Icon name="uil:github" mode="svg" size="1.5em" />
                    </NuxtLink>
                    <NuxtLink to="https://www.linkedin.com/in/yanan-lyu6/" target="_blank">
                        <Icon name="uil:linkedin" mode="svg" size="1.5em" />
                    </NuxtLink>
                    <NuxtLink to="mailto:yanan.lyu6@gmail.com">
                        <Icon name="uil:envelope" mode="svg" size="1.5em" />
                    </NuxtLink>
                </div>
            </footer>
        </div>
    </div>
</template>
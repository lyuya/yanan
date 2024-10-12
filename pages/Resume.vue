<script setup lang="ts">
import Tags from '~/src/components/Tags.vue';
</script>
<template>
    <div class="p-5 text-sm font-sans ">

        <!-- <section class="text-center">
            <div class="text-3xl font-bold px-2">Yanan LYU</div>
            <div class="text-xs text-gray-800 dark:text-gray-100 flex flex-wrap divide-x divide-solid divide-gray-400 justify-center">
                <NuxtLink to="mailto:yanan.lyu6@gmail.com" class="px-2">yanan.lyu6@gmail.com</NuxtLink>
                <span class="px-2">+33633339502</span>
                <NuxtLink to="https://www.yananlyu.fr" class="px-2">yanan.dev</NuxtLink>
                <NuxtLink to="https://www.linkedin.com/in/yanan-lyu6/" class="px-2">linkedin.com/in/yanan-lyu6/</NuxtLink>
                <NuxtLink to="https://github.com/lyuya" class="px-2">github.com/lyuya/</NuxtLink>
            </div>
            <div>
                <p>Front-end Engineer with 3 years of experience in building responsive, user-friendly interfaces.</p>
            </div>
        </section> -->

        <section class="pt-4">
            <div class="text-xl font-bold pb-5">
                Working experiences
            </div>
            <div class="grid gap-y-5 divide-y">
                <div class="grid gap-y-2">
                    <div class="w-full inline-flex justify-between">
                        <div>
                            <div class="font-semibold">Front-end Engineer</div>
                            <div>2022 – 2024</div>                            

                        </div>
                        <div class="text-end">
                            <div class="font-semibold">JeudiMerci</div>
                            <div>Grenoble, France</div>
                        </div>
                    </div>
                    <div class="grid gap-y-1">
                        <li>Contributed to the development of a B2B gifting platform by creating modular, reusable UI
                            components to enhance the product’s scalability and maintainability, with a strong focus on
                            consistent design patterns.</li>
                        <li>Implemented a subscription workflow using Stripe API and developed the UI for the order
                            creation
                            process, adhering to design system principles for a smooth and uniform user experience.</li>
                        <li>Built a Google Sheets extension, simplifying the process of generating delivery address
                            files
                            for users.</li>
                        <li>Contributed to code quality by writing unit tests and developing generic components such as
                            buttons and multiple select dropdowns with chips</li>
                    </div>
                    <Tags :items="['TypeScript', 'Angular', 'Jest', 'PostgreSQL', 'C#', 'Stripe API']" />
                </div>
                <div class="grid gap-y-2 pt-4">
                    <div class="w-full inline-flex justify-between">
                        <div>
                            <div class="font-semibold">Front-end Engineer</div>
                            <div>June 2020 – Dec 2021</div>                            
                        </div>
                        <div class="text-end">
                            <div class="font-semibold">Seiitra (Foncia)</div>
                            <div>Grenoble, France</div>
                        </div>
                    </div>
                    <div class="grid gap-y-1">
                        <li>Led the development of a web component library using StencilJS as part of a larger
                            initiative to
                            standardize UI elements across a SaaS platform for real estate agencies.</li>
                        <li>Built reusable, customizable components such as a data grid (with pagination, collapsible
                            rows,
                            and
                            action bars) and a history timeline for document tracking, ensuring consistency and reducing
                            code
                            duplication across the product.</li>
                        <li>Collaborated with design teams to ensure that components adhered to UI/UX design principles
                            and
                            could
                            be easily integrated across different applications.</li>
                        <li>Developed a comprehensive documentation website to guide developers in implementing and
                            customizing
                            components, improving the overall usability and consistency of the design system.</li>
                        <li>Created utility functions, wrote unit tests, and optimized component architecture to ensure
                            scalability, maintainability, and seamless integration within the Powimo product.</li>
                    </div>
                    <Tags :items="['StencilJS', 'Angular', 'MongoDB', 'Jasmine']" />
                </div>
                <div class="grid gap-y-2 pt-4">
                    <div class="w-full inline-flex justify-between">
                        <div>
                            <div class="font-semibold">Software Engineering Intern</div>
                            <div>Apr 2019 – Aug 2019</div>
                        </div>
                        <div class="text-end">
                            <div class="font-semibold">Evolutis</div>
                            <div>Grenoble, France</div>
                        </div>
                    </div>

                    <div class="grid gap-y-1">
                        <li>Developed a custom web solution for a real estate agency.</li>
                        <li>Built backend with Symfony (PHP) and frontend with Angular.</li>
                    </div>
                    <Tags :items="['Angular', 'Symfony', 'PHP', 'MySQL']" />
                </div>
            </div>

        </section>

        <section class="pt-4">
            <div class="text-xl font-bold py-5">Education</div>
            <div class="grid gap-y-5">
                <div class="grid gap-y-2">
                    <div class="w-full inline-flex justify-between">
                        <div class="">
                            <span>Grenoble Alpes University </span>
                            <span>Master in Computer Science</span>
                        </div>
                        <div>

                            <div>2019 – 2021</div>
                        </div>
                    </div>
                    <Tags
                        :items="['Design pattern', 'Human-Machine Interface Engineering', 'Database', 'Eco-design WEB', 'Mobile Development']" />
                </div>
                <div class="grid gap-y-2">
                    <div class="w-full inline-flex justify-between">
                        <div class="">
                            <span>Grenoble Alpes University </span>
                            <span>Bachelor in Computer Science</span>
                        </div>
                        <div>

                            <div>2018 – 2019</div>
                        </div>
                    </div>
                    <Tags
                        :items="['Systems and networks', 'Object oriented programming', 'Declarative programming', 'Algorithm for model validation']" />
                </div>
            </div>

        </section>
        <section class="pt-4">
            <div class="text-xl font-bold py-5">Projects</div>
            <div class="grid gap-y-5">
                <div class="grid gap-y-2">
                    <div class="w-full inline-flex justify-between">
                        <div>Listy - A task planner web application</div>
                        <NuxtLink to="https://github.com/lyuya/task-manager">github.com/lyuya/task-manager</NuxtLink>
                    </div>
                    <div>
                        <li>Developed a responsive to-do list app with task creation, editing, and completion tracking.</li>
                        <li>Integrated Firebase Authentication for secure sync with Google accounts.</li>
                        <li>Provided a daily task summary and customizable color themes to enhance user experience.</li>
                    </div>
                </div>                
            </div>

        </section>
        <section class="pt-4">
            <div class="text-xl font-bold py-5">Skills</div>
            <div class="grid gap-y-2">
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Languages: </div>
                    <Tags :items="['TypeScript', 'JavaScript', 'CSS', 'HTML', 'C#']" />
                </div>
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Frameworks: </div>
                    <Tags
                        :items="['Next JS', 'React', 'Angular', 'Nuxt', 'Vue', 'StencilJS', 'Jest', 'Tailwind CSS']" />
                </div>
            </div>
        </section>
    </div>

</template>
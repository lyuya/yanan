<script setup lang="ts">
import Tags from '~/src/components/Tags.vue';
const route = useRoute();
const inactiveStyle = 'opacity-80 hover:opacity-60';
const activeStyle = 'opacity-100 underline';
console.log(route.hash)
</script>
<template>
    <div class="p-5 text-sm font-sans ">

        <section id="work" class="p-10">
            <div class="pb-10">
                <NuxtLink to="#work" class="text-xl font-bold">
                    Working experiences
                </NuxtLink>
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

        <section id="education" class="p-10">
            <div class="pb-10">
                <NuxtLink to="#education" class="text-xl font-bold">Education</NuxtLink>
            </div>
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
        <section id="projects" class="p-10">
            <div class="pb-10">
                <NuxtLink class="text-xl font-bold" to="#projects">Projects</NuxtLink>
            </div>
            <div class="grid gap-y-5">
                <div class="grid gap-y-2">
                    <div class="w-full inline-flex justify-between">
                        <NuxtLink to="https://github.com/lyuya/task-manager" class="hover:underline">Listy - A task
                            planner web application</NuxtLink>
                    </div>
                    <div>
                        <li>Developed a responsive to-do list app with task creation, editing, and completion tracking.
                        </li>
                        <li>Integrated Firebase Authentication for secure sync with Google accounts.</li>
                        <li>Provided a daily task summary and customizable color themes to enhance user experience.</li>
                    </div>
                </div>
            </div>

        </section>
        <section id="skills" class="p-10">
            <div class="pb-10">
                <NuxtLink class="text-xl font-bold" to="#skills">Skills</NuxtLink>
            </div>
            <div class="grid gap-y-2">
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Languages: </div>
                    <Tags :items="['TypeScript', 'JavaScript', 'CSS', 'HTML']" />
                </div>
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Frameworks: </div>
                    <Tags :items="['Next JS', 'React', 'Angular', 'Nuxt', 'Vue', 'StencilJS', 'Tailwind CSS']" />
                </div>
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Test: </div>
                    <Tags :items="['Jest', 'Jasmine', 'Vitest']" />
                </div>
                <div class="grid gap-y-2 sm:inline-flex sm:justify-between">
                    <div class="text-base">Tools: </div>
                    <Tags :items="['Git', 'VScode', 'WebStorm', 'Figma']" />
                </div>
            </div>
        </section>
    </div>
    <!-- sidemenu -->
    <div class="hidden sm:block fixed left-2.5 inset-1/3 w-28">
        <div class="grid gap-y-2 text-end">
            <div>
                <NuxtLink class="rounded p-1 bg-neutral-50 dark:bg-neutral-800 shadow-md"
                    :class="route.hash === '#work' ? activeStyle : inactiveStyle" to="#work">
                    Working experiences
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="rounded p-1 bg-neutral-50 dark:bg-neutral-800 shadow-md"
                    :class="route.hash === '#education' ? activeStyle : inactiveStyle" to="#education">
                    Education
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="rounded p-1 bg-neutral-50 dark:bg-neutral-800 shadow-md"
                    :class="route.hash === '#projects' ? activeStyle : inactiveStyle" to="#projects">
                    Projects
                </NuxtLink>
            </div>
            <div>
                <NuxtLink class="rounded p-1 bg-neutral-50 dark:bg-neutral-800 shadow-md"
                    :class="route.hash === '#skills' ? activeStyle : inactiveStyle" to="#skills">
                    Skills
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
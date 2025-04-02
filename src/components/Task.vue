<template>
    <div class="min-h-screen bg-gray-50/50">
        <SideMenu />
        <div class="p-4 xl:ml-80">
            <div class="flex items-center justify-between">
                <p tabindex="0"
                    class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                    Tasks</p>
                <div
                    class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                    <p>Sort By:</p>
                    <select v-model="sortBy" @change="Tasks" aria-label="select"
                        class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                        <option class="text-sm text-indigo-800">Latest</option>
                        <option class="text-sm text-indigo-800">Oldest</option>
                        <option class="text-sm text-indigo-800">Latest</option>
                    </select>
                </div>
            </div>
            <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <div class="sm:flex items-center justify-between">
                    <div class="flex items-center">
                        <a class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                            href=" javascript:void(0)">
                            <div class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                                <p>All</p>
                            </div>
                        </a>
                        <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                            href="javascript:void(0)">
                            <div
                                class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Done</p>
                            </div>
                        </a>
                        <a class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                            href="javascript:void(0)">
                            <div
                                class="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                                <p>Pending</p>
                            </div>
                        </a>
                    </div>
                    <button @click="showModal = true"
                        class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                        <p class="text-sm font-medium leading-none text-white">Add Task</p>
                    </button>
                </div>
                <div class="mt-7 overflow-x-auto">
                    <table class="w-full whitespace-nowrap">
                        <tbody>
                            <tr v-for="task in tasks" :key="task.id" tabindex="0"
                                class="focus:outline-none  h-16 border border-gray-100 rounded">
                                <td>
                                    <div class="ml-5">
                                        <div
                                            class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                            <input placeholder="checkbox" type="checkbox"
                                                class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                            <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                                <svg class="icon icon-tabler icon-tabler-check"
                                                    xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                    <path d="M5 12l5 5l10 -10"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="focus:text-indigo-600 ">
                                    <div class="flex items-center pl-5">
                                        <p class="text-base font-medium leading-none text-gray-700 mr-2">{{ task.title
                                        }}</p>
                                    </div>
                                </td>
                                <td class="pl-24">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M9.16667 2.5L16.6667 10C17.0911 10.4745 17.0911 11.1922 16.6667 11.6667L11.6667 16.6667C11.1922 17.0911 10.4745 17.0911 10 16.6667L2.5 9.16667V5.83333C2.5 3.99238 3.99238 2.5 5.83333 2.5H9.16667"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <circle cx="7.50004" cy="7.49967" r="1.66667" stroke="#52525B"
                                                stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">
                                            </circle>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">{{ task.status }}</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none">
                                            <path d="M7.5 5H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 10H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M7.5 15H16.6667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 5V5.00667" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 10V10.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M4.16669 15V15.0067" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">{{ formatDate(task.due_date)
                                        }}</p>
                                    </div>
                                </td>
                                <td class="pl-5">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 20 20" fill="none">
                                            <path
                                                d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                                                stroke="#52525B" stroke-width="1.25" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                            <path d="M10 9.1665V9.17484" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M6.66669 9.1665V9.17484" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                            <path d="M13.3333 9.1665V9.17484" stroke="#52525B" stroke-width="1.25"
                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                        <p class="text-sm leading-none text-gray-600 ml-2">{{ task.description ?
                                            truncateDescription(task.description) : '' }}</p>
                                    </div>
                                </td>

                                <td class="pl-5">
                                    <button
                                        class="py-3 px-6 focus:outline-none text-sm leading-none text-gray-700 bg-gray-100 rounded">Due
                                        {{ formatDueDate(task.due_date) }}
                                    </button>
                                </td>
                                <td class="pl-4">
                                    <button
                                        class="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
                                </td>
                                <td>
                                    <div class="relative px-5 pt-2">
                                        <button class="focus:ring-2 rounded-md focus:outline-none"
                                            @click="toggleDropdown($event)" role="button" aria-label="option">
                                            <svg class="dropbtn" xmlns="http://www.w3.org/2000/svg" width="20"
                                                height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z"
                                                    stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z"
                                                    stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                                <path
                                                    d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z"
                                                    stroke="#9CA3AF" stroke-width="1.25" stroke-linecap="round"
                                                    stroke-linejoin="round"></path>
                                            </svg>
                                        </button>
                                        <div
                                            class="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                                            <div tabindex="0"
                                                class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Edit</p>
                                            </div>
                                            <div tabindex="0" @click="deleteTask(task.id)"
                                                class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                                                <p>Delete</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="tasks.length === 0">
                                <td colspan="8" class="text-center py-4">No tasks found.</td>
                            </tr>
                            <tr class="h-3"></tr>
                        </tbody>
                    </table>
                </div>

                <div v-if="showModal"
                    class="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
                    @click.self="showModal = false">
                    <div
                        class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl bg-white">
                        <div
                            class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
                            <p class="font-semibold text-gray-800">Add Task</p>
                            <svg @click="showModal = false" class="w-6 h-6 cursor-pointer" fill="none"
                                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <div class="flex flex-col px-6 py-5 bg-gray-50">
                            <p class="mb-2 font-semibold text-gray-700">Title</p>
                            <input type="text" v-model="form.title" placeholder="Enter Title"
                                class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm">
                        </div>
                        <div class="flex flex-col px-6 py-5 bg-gray-50">
                            <p class="mb-2 font-semibold text-gray-700">Description</p>
                            <textarea v-model="form.description" placeholder="Enter description..."
                                class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"></textarea>
                            <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                                <div class="w-full sm:w-1/2">
                                    <p class="mb-2 font-semibold text-gray-700">Status</p>
                                    <select v-model="form.status"
                                        class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none">
                                        <option value=""></option>
                                        <option value="pending">Pending</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                                <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                                    <p class="mb-2 font-semibold text-gray-700">Due Date</p>
                                    <input v-model="form.due_date" type="date"
                                        class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm" />
                                </div>
                            </div>
                            <hr />

                        </div>
                        <div
                            class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
                            <p @click="showModal = false" class="font-semibold text-gray-600 cursor-pointer">
                                Cancel
                            </p>
                            <button @click="handleCreateTask" :disabled="loading"
                                class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                                {{ loading ? 'Creating...' : 'Proceed' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />

</template>


<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import SideMenu from '@/components/Partials/SideMenu.vue';
import Footer from './Partials/Footer.vue';
import type { TaskForm, TaskData, Task, TasksResponse } from '@/types/task';
import axios from 'axios';
import toastr from 'toastr';
import Swal from 'sweetalert2';

toastr.options = {
    closeButton: true,
    progressBar: true,
    positionClass: 'toast-top-right',
    timeOut: 5000,
    extendedTimeOut: 1000,
    hideDuration: 300,
    showDuration: 300,
    showMethod: 'slideDown',
    hideMethod: 'slideUp',
    newestOnTop: true,
    preventDuplicates: true,
};

export default defineComponent({
    name: 'Task',
    components: {
        SideMenu,
        Footer
    },

    setup() {

        const showModal = ref(false);
        const loading = ref(false);
        const tasks = ref<Task[]>([]);
        const sortBy = ref('latest');

        const form = reactive<TaskForm>({
            title: '',
            status: '',
            due_date: '',
            description: '',
        });

        const baseUrl = import.meta.env.VITE_API_BASE_URL + '/graphql';

        const Tasks = async () => {
            loading.value = true;
            try {
                const response = await axios.post(baseUrl, {
                    query: `
                        query {
                        tasks(first: 5, page: 1) {
                            data {
                            id
                            title
                            status
                            description
                            due_date
                            user_id
                            }
                            paginatorInfo {
                            total
                            perPage
                            currentPage
                            lastPage
                            hasMorePages
                            }
                        }
                        }
                     `,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
                    },
                });

                console.log('Tasks response:', response.data);

                const result: TasksResponse = response.data.data.tasks;
                tasks.value = result.data;

                console.log('Paginator Info:', result.paginatorInfo);
            } catch (error: any) {
                console.error('Error fetching tasks:', error);
                toastr.error('Failed to fetch tasks. Please try again.', 'Error');
            } finally {
                loading.value = false;
            }
        };


        onMounted(() => {
            Tasks();
        });

        const handleCreateTask = async () => {

            if (!form.title || !form.status || !form.due_date) {
                toastr.error('Title, Status, and Due Date are required.', 'Error');
                return;
            }
            loading.value = true;

            try {
                const response = await axios.post(baseUrl, {
                    query: `
                            mutation CreateTask($title: String!, $status: String!, $due_date: String!, $description: String) {
                            createTask(title: $title, status: $status, due_date: $due_date, description: $description) {
                                id
                                title
                                status
                                due_date
                                description
                            }
                            }
                        `,
                    variables: {
                        title: form.title,
                        status: form.status,
                        due_date: form.due_date,
                        description: form.description || null,
                    },
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
                    },
                });
                console.log('Full API response:', response.data);
                if (!response.data.data || !response.data.data.createTask) {
                    throw new Error('Invalid response: createTask is missing');
                }

                const result: TaskData = response.data.data.createTask;

                toastr.success('Request completed!', 'Success');
                console.log('Task created:', result);
                Object.assign(form, { title: '', status: '', due_date: '', description: '' });
                showModal.value = false;

                Tasks();

            } catch (error) {
                toastr.error('Failed to create task. Please try again.', 'Error');
                console.error('Error creating task:', error);
            } finally {
                loading.value = false;
            }
        };


        const deleteTask = async (id: string) => {

            const result = await Swal.fire({
                title: 'Are you sure?',
                text: "This action is irrevesible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Proceed'
            });


            if (!result.isConfirmed) {
                return;
            }

            loading.value = true;
            try {
                const response = await axios.post(baseUrl, {
                    query: `
                        mutation {
                        deleteTask(id: "${id}") {
                            success
                            message
                            status_code
                        }
                        }
                    `,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`,
                    },
                });

                console.log('Delete response:', response.data);
                const result = response.data.data.deleteTask;

                if (result.success) {
                    toastr.success(result.message);
                    Tasks();
                } else {
                    toastr.error(result.message || 'Failed to delete task.');
                }
            } catch (error: any) {
                console.error('Error deleting task:', error);
                toastr.error('Failed to delete task. Please try again.');
            } finally {
                loading.value = false;
            }
        };



        const formatDate = (dateString: string) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        };

        const formatDueDate = (dateString: string) => {
            const date = new Date(dateString);
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            if (date.toDateString() === today.toDateString()) return 'today';
            if (date.toDateString() === tomorrow.toDateString()) return 'tomorrow';
            return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' });
        };

        const truncateDescription = (description: string | null) => {
            if (!description) return '';
            const words = description.split(' ');
            if (words.length <= 4) return description;
            return words.slice(0, 4).join(' ') + '...';
        };


        const toggleDropdown = (event: Event) => {
            const element = event.currentTarget as HTMLElement;
            const dropdowns = document.getElementsByClassName('dropdown-content');
            const list = element.parentElement?.parentElement?.getElementsByClassName('dropdown-content')[0];

            if (list) {
                list.classList.add('target');
                for (let i = 0; i < dropdowns.length; i++) {
                    if (!dropdowns[i].classList.contains('target')) {
                        dropdowns[i].classList.add('hidden');
                    }
                }
                list.classList.toggle('hidden');
                list.classList.remove('target');
            }
        };

        const toggleCheckbox = (event: Event) => {
            const checkbox = event.target as HTMLInputElement;
            const checkIcon = checkbox.nextElementSibling as HTMLElement;
            if (checkbox.checked) {
                checkIcon.classList.remove('hidden');
            } else {
                checkIcon.classList.add('hidden');
            }
        };

        return {
            toggleDropdown,
            toggleCheckbox,
            showModal,
            form,
            loading,
            tasks,
            sortBy,
            handleCreateTask,
            formatDate,
            formatDueDate,
            Tasks,
            deleteTask,
            truncateDescription
        };
    },
});
</script>
<style scoped>
.checkbox:checked+.check-icon {
    display: flex;
}
</style>
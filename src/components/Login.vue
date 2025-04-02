<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-6 sm:px-8 lg:px-10">
        <div class="max-w-md w-full space-y-8 bg-white p-6 shadow-lg rounded-lg">
            <div>
                <h3 class="text-center text-2xl sm:text-3xl font-extrabold text-gray-900">
                    Sign in
                </h3>
                <p class="text-center text-sm text-gray-600">
                    Enter your credentials below
                </p>
            </div>
            <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
                <div class="space-y-4">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                        <input v-model="form.email" id="email" name="email" type="email" autocomplete="email" required
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Email address" />
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input v-model="form.password" id="password" name="password" type="password"
                            autocomplete="current-password" required
                            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter Password" />
                    </div>
                </div>

                <div>
                    <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        :disabled="loading">
                        <span v-if="loading">Signing in...</span>
                        <span v-else>Sign in</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import axios from 'axios';
import 'toastr/build/toastr.min.css';
import toastr from 'toastr';
import { useRouter } from 'vue-router';
import type { AuthData, AuthForm } from '@/types/auth';

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
    name: 'Login',
    setup() {
        const router = useRouter();
        const form = reactive<AuthForm>({
            email: '',
            password: '',
        });


        const loading = ref(false);

        const baseUrl = import.meta.env.VITE_API_BASE_URL + '/graphql';

        const handleSubmit = async () => {
            loading.value = true;

            try {
                const response = await axios.post(baseUrl, {
                    query: `
                        mutation SignIn($email: String!, $password: String!) {
                            signin(email: $email, password: $password) {
                                success
                                message
                                token
                                user {
                                    id
                                    name
                                    email
                                }
                            }
                        }
                    `,
                    variables: {
                        email: form.email,
                        password: form.password,
                    },
                });

                const result: AuthData = response.data.data.signin;

                if (result.success) {
                    localStorage.setItem('token', result.token);
                    toastr.info(result.message);
                    router.push('/dashboard');
                } else {
                    toastr.error(result.message);
                }
            } catch (error) {
                toastr.error('Login failed. Please try again.');
            } finally {
                loading.value = false;
            }
        };

        return {
            form,
            loading,
            handleSubmit,
        };
    },
});
</script>
<style scoped></style>
<nav x-data="{ open: false }" class="border-b border-gray-100" style="background-color:#29b0ef">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex">
                <!-- Logo -->
                <div class="shrink-0 flex items-center">
                    <a href="{{ route('welcome') }}" class="no-underline">
                        <p class="text-gray-100 text-lg mb-0"> Dashboard </p>
                    </a>
                </div>

                <!-- Navigation Links -->
                
            </div>

            <!-- Settings Dropdown -->
            <div class="hidden sm:flex sm:items-center sm:ml-6">
                <x-dropdown align="right" width="48" class="bg-transparent">
                    <x-slot name="trigger" >
                        <button class="inline-flex items-center px-3 py-2  border-none text-lg leading-4 font-medium rounded-md text-gray-100 bg-transparent hover:text-gray-300 focus:outline-none transition ease-in-out duration-150">
                            <div>{{ Auth::user()->name }}</div>

                            <div class="ml-1">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </x-slot>

                    <x-slot name="content">
                        <x-dropdown-link :href="route('profile.edit')" class="no-underline">
                            {{ __('الملف الشخصي ') }}
                        </x-dropdown-link>
                        <x-dropdown-link :href="route('profile.favorite_movie')" class="no-underline">
                            {{ __('افلام اعجبتني') }}
                        </x-dropdown-link>
                       

                        <!-- Authentication -->
                        <form method="POST" action="{{ route('logout') }}" >
                            @csrf

                            <x-dropdown-link :href="route('logout')"
                                    onclick="event.preventDefault();
                                                this.closest('form').submit();" class="no-underline">
                                {{ __('                  تسجيل خروج
                                ') }}
                            </x-dropdown-link>
                        </form>
                    </x-slot>
                </x-dropdown>
            </div>

            <!-- Hamburger -->
            <div class="-mr-2 flex items-center sm:hidden ">
                <a @click="open = ! open" class="inline-flex items-center bg-transparent  justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
        

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200 text-right">
            <div class="px-4">
                <div class="font-medium text-base text-gray-100 ">{{ Auth::user()->name }}</div>
                <div class="font-medium text-sm text-gray-500 ">{{ Auth::user()->email }}</div>
            </div>

            <div class="mt-3 space-y-1 ">
                <x-responsive-nav-link :href="route('profile.edit')" class="no-underline text-gray-100 text-right">
                    {{ __('الملف الشخصي ') }}
                </x-responsive-nav-link>
                <x-responsive-nav-link :href="route('profile.favorite_movie')" class="no-underline text-gray-100 text-right">
                    {{ __('افلام اعجبتني') }}
                </x-responsive-nav-link>
               

                <!-- Authentication -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-responsive-nav-link :href="route('logout')"
                            onclick="event.preventDefault();
                                        this.closest('form').submit();"  class="no-underline text-gray-100 text-right">
                        {{ __('                  تسجيل خروج
                        ') }}
                    </x-responsive-nav-link>
                </form>
            </div>
        </div>
    </div>
</nav>

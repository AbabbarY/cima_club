    {{-- <div class="card bg-light shadow mb-4"> --}}
      <div class="card-headerborder-0 p-3 text-white" style="background-color: #29b0ef;">
        <div class="row ">
            <h3 class="mb-0 text-end">حسابي </h3>
          <div class="col-4 text-right">
          </div>
        </div>
      </div>
      <div class="card-body">
        <form id="send-verification" method="post" action="{{ route('verification.send') }}">
            @csrf
        </form>
        <form method="post" action="{{ route('profile.update') }}" class="mt-6 space-y-6">
          @csrf
          @method('patch')
          <h6 class="heading-small text-muted mb-4">معلومات المستخدم</h6>
          <div class="pl-lg-4">
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <x-input-label for="nom" :value="__('الإسم الكامل ')" />
                  <x-text-input id="nom" name="name" type="text" class="form-control form-control-alternative my-3" :value="old('name', $user->name)" required autofocus autocomplete="name" />
                  <x-input-error class="mt-2" :messages="$errors->get('name')" />
                </div>
              </div>
             
              <div class="col-lg-6">
                <div class="form-group">
                  <x-input-label for="email" :value="__('البريد الإلكتروني')" />
                  <x-text-input id="email" name="email" type="email" class="form-control form-control-alternative my-3" :value="old('email', $user->email)" required autocomplete="username" />
                  <x-input-error class="mt-2" :messages="$errors->get('email')" />
      
                  @if ($user instanceof \Illuminate\Contracts\Auth\MustVerifyEmail && ! $user->hasVerifiedEmail())
                      <div>
                          <p class="text-sm mt-2 text-gray-800 dark:text-gray-200">
                              {{ __('Your email address is unverified.') }}
      
                              <button form="send-verification" class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
                                  {{ __('Click here to re-send the verification email.') }}
                              </button>
                          </p>
      
                          @if (session('status') === 'verification-link-sent')
                              <p class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                  {{ __('A new verification link has been sent to your email address.') }}
                              </p>
                          @endif
                      </div>
                  @endif
              </div>
              </div>
        
            </div>
        
        
        </div>

        <div class="flex items-center gap-4 mb-3 ">
            <button type="submit" class="btn ml-4 text-white" style="background: #33365a;border: 1px solid #33365a;">احفظ التغييرات</button>
            
        </div>
        </form>
      </div>
    {{-- </div> --}}





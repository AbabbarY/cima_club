


  

@extends("profile.edit")

@section("content")
<div class="card bg-light shadow mb-4" >
  <div class="card-header  border-0 "   style="background-color:#29b0ef">
    <div class="row align-items-center">
      <div class="col-8">
        <h4 class="mb-0 text-white p-2">تغيير كلمة المرور</h4>
      </div>
      <div class="col-4 text-right">
      </div>
    </div>
  </div>
  <div class="card-body">
      <form method="post" action="{{ route('password.update') }}"   >
          @csrf
          @method('put')

          <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-8 m-3">
                  <div class="form-group">
                      <x-input-label for="current_password" :value="__('كلمة المرور الحالية ')" />
                      <x-text-input id="current_password" name="current_password" type="password" class="form-control form-control-alternative" autocomplete="current-password" />
                      <x-input-error :messages="$errors->updatePassword->get('current_password')" class="mt-2" />
                  </div>
                </div>
                <div class="col-lg-8 m-3">
                  <div class="form-group">
                      <x-input-label for="password" :value="__('كلمة المرور الجديدة ')" />
                      <x-text-input id="password" name="password" type="password" class="form-control form-control-alternative" autocomplete="new-password" />
                      <x-input-error :messages="$errors->updatePassword->get('password')" class="mt-2" />
                  </div>
                </div>
                <div class="col-lg-8 m-3">
                  <div class="form-group">
                      <x-input-label for="password_confirmation" :value="__('تأكيد كلمة المرور ')" />
                      <x-text-input id="password_confirmation" name="password_confirmation" type="password" class="form-control form-control-alternative" autocomplete="new-password" />
                      <x-input-error :messages="$errors->updatePassword->get('password_confirmation')" class="mt-2" />
                  </div>
                </div>
              </div>
          </div>    
          <div class="flex items-center gap-4 ml-4">
              <button type="submit" class="btn btn-success m-3"  style="background: #33365a;border: 1px solid #33365a;"> {{ __(' احفظ التغييرات') }}</button>
  
              @if (session('status') === 'password-updated')
                  <p
                      x-data="{ show: true }"
                      x-show="show"
                      x-transition
                      x-init="setTimeout(() => show = false, 2000)"
                      class="alert alert-success p-3 m-2"
                  >{{ __('Saved.') }}</p>
              @endif
          </div>
      </form>
  </div>
</div>


</div>
@endsection







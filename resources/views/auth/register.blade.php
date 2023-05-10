<!doctype html>
<html lang="en">

<head>
  <title>انشاء حساب جديد</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    @viteReactRefresh
    @vite(['resources/js/index.jsx','resources/css/app.css'])
   
</head>

<body>


    <nav class="navbar navbar-light " style="background-color:#29b0ef">
        <div class="container">
            <a  class="btn btn-dark btn_login" href="/login">الدخول</a>
            <div class="navbar-nav">
                  <a class="nav-item nav-link text-white" href="/">الرئيسية </a>
            </div>
        </div>
    </nav>


    <div class="form_register">

            
        <div class="have_account">
                <p>تمتلك حساب ؟ يمكنك تسجيل  الدخول الان</p>
                <a href="/login"> تسجيل الدخول</a>
            </div>
    
            <form method="POST" action="{{ route('register') }}">
                @csrf
                <label for="name" >الاسم الكامل</label ><br />
                <input type="text" name="name" placeholder="الاسم الكامل" class="@error('name') is-invalid @enderror"  value="{{ old('name') }}" required autocomplete="name" autofocus/>  <br />
                @error('name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
    
    

            
                <label for="email" > البريد الإليكتروني</label ><br />
                <input type="email" name="email" placeholder=" البريد الإليكتروني" class="@error('email') is-invalid @enderror"  value="{{ old('email') }}" required autocomplete="email"/> <br />
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
                
                <label for="password" > كلمة المرور </label ><br />
                <input type="password" name="password" placeholder="كلمة المرور" class="@error('password') is-invalid @enderror"  required autocomplete="new-password"/> <br />
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
    
    
                <label for="check_password" > تأكيد كلمة المرور </label ><br />
                <input type="password" name="password_confirmation" placeholder=" تأكيد كلمة المرور"  required autocomplete="new-password"/> <br />
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror

                <input type="submit" value="انشاء حساب جديد" class="submit" />
    
            </form>
        </div>
    </div>
</body>


<script>

</script>

</html> 




{{-- 
 @extends('layouts.app') 

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}">
                        @csrf

                        <div class="row mb-3">
                            <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('Name') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="password-confirm" class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection  --}}+
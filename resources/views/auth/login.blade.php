<!doctype html>
<html lang="en">

<head>
  <title>تسجيل الدخول</title>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS v5.2.1 -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    @viteReactRefresh
    @vite(['resources/js/index.jsx','resources/css/app.css'])
</head>

<body>

    <nav class="navbar navbar-light " style="background-color:#29b0ef">
        <div class="container">
            <a  class="btn btn-dark btn_login" href="/register"> انشاء حساب</a>
            <div class="navbar-nav">
                  <a class="nav-item nav-link text-white" href="/">الرئيسية </a>
            </div>
        </div>
    </nav>

   <div class="form_login">
          

    <div class="not_account">
        <p>لا تمتلك حساب ؟ يمكنك تسجيل عضويه جديده الان</p>
        <a href="/register">انشاء حساب جديد</a>
    </div>

    <form method="POST" action="{{ route('login') }}">

        @csrf

        <label for="email">البريد الالكتروني </label> <br />
        <input type="email" name="email" placeholder="البريد الالكتروني" class="@error('email') is-invalid @enderror"  value="{{ old('email') }}" required autocomplete="email" autofocus/> <br />
        @error('email')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

        <label for="password">كلمه المرور</label> <br />
        <input type="password" name="password" class="@error('password') is-invalid @enderror"  required autocomplete="current-password" placeholder="كلمه المرور" />
        @error('password')
            <span class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </span>
        @enderror

    
        <input style="width:auto" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
        {{ __('Remember Me') }}

        

        <input type="submit" value="تسجيل الدخول"  class="submit"/>

        @if (Route::has('password.request'))
            <a style="color: #aaa;" class="btn btn-link" href="{{ route('password.request') }}">
                {{ __('?نسيت كلمة السر ') }}
            </a>
        @endif

    </form>
</div>

</body>

</html>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/login.css') }}">
</head>
<body>
    <div class="app">
        <h1 class="login-title">Iniciar sesión</h1>
        <p class="login-subtitle">Ingresa tus datos para entrar a tu cuenta</p>

        <form action="{{ route('login') }}" method="POST" class="login-form" autocomplete="off">
            @csrf
            <div class="login-form-group">
                <input type="text" name="email" class="login-input" placeholder="Correo electrónico" required value="{{ old('email') }}">
                @error('email')
                    <small>{{$message}}</small>
                @enderror
            </div>

            <div class="login-form-group">
                <input type="password" name="password" class="login-input" placeholder="Contraseña" required>
                @error('password')
                    <small>{{$message}}</small>
                @enderror
            </div>
            <label for="rememberme">
                <input type="checkbox" id="rememberme">
                Recordarme
            </label>

            <div class="text-center">
                <button class="login-button">Ingresar</button>
            </div>
        </form>

        <p>{{ date('Y') }} &copy; CRM</p>
    </div>
</body>
</html>

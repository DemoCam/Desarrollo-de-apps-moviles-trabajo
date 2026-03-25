# Friends App - Aplicación Expo

Una aplicación móvil desarrollada con **Expo** y **React Native** que permite gestionar una lista de amigos. La aplicación utiliza `expo-router` para navegación y `expo-sqlite` para almacenamiento local de datos.

## Características

✅ **Definición de Expo**: La página principal muestra una explicación clara sobre qué es Expo  
✅ **Agregar Amigos**: Formulario para registrar amigos con nombre, email y teléfono  
✅ **Lista de Amigos**: Vista de todos los amigos guardados con opción para eliminarlos  
✅ **Base de Datos Local**: Almacenamiento persistente usando SQLite  
✅ **Navegación por Tabs**: Interfaz intuitiva con pestañas para acceder a cada sección  

## Estructura del Proyecto

```
├── app/
│   ├── _layout.tsx              # Layout raíz con navegación por tabs
│   ├── index.tsx                # Página principal (Definición de Expo)
│   ├── home.tsx                 # Formulario para agregar amigos
│   └── profile/
│       ├── _layout.tsx          # Layout del perfil
│       └── friends.tsx          # Lista de amigos
├── utils/
│   └── database.ts              # Funciones para manejar SQLite
├── package.json
├── app.json
├── tsconfig.json
└── README.md
```

## Requisitos

- Node.js instalado (versión 14 o superior)
- Expo CLI instalado: `npm install -g expo-cli`
- Expo Go app en tu dispositivo móvil (descargable desde App Store o Google Play)

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/tu-usuario/friends-app.git
cd friends-app
```

2. Instala las dependencias:
```bash
npm install
```

## Ejecución

### Iniciar el servidor Expo:
```bash
npm start
```

### Para ejecutar en diferentes plataformas:

- **Android**: Presiona `a` en la terminal o escanea el código QR con Expo Go
- **iOS**: Presiona `i` en la terminal o escanea el código QR con la cámara de iOS
- **Web**: Presiona `w` en la terminal

## Páginas de la Aplicación

### 1. Inicio (index.tsx)
- Muestra una definición detallada de qué es Expo
- Proporciona orientación sobre cómo usar la aplicación
- Introduce las tres secciones principales

### 2. Agregar Amigos (home.tsx)
- Formulario con campos: Nombre, Email y Teléfono
- Validación de datos antes de guardar
- Mensajes de éxito/error
- Base de datos SQLite local

### 3. Mis Amigos (profile/friends.tsx)
- Lista completa de amigos guardados
- Avatar con inicial del nombre
- Información de contacto (email y teléfono)
- Opción para eliminar amigos
- Pull-to-refresh para actualizar la lista

## Tecnologías Utilizadas

- **Expo**: Framework para desarrollo móvil con React Native
- **React Native**: Framework para aplicaciones móviles
- **expo-router**: Solución de enrutamiento inspirada en Next.js
- **expo-sqlite**: Acceso a base de datos SQLite local
- **TypeScript**: Tipado estático para JavaScript
- **React Hooks**: Estado y efectos con Hooks de React

## Base de Datos

La aplicación usa SQLite para almacenar los datos de los amigos:

```sql
CREATE TABLE friends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Licencia

Este proyecto es público y puede ser utilizado libremente.

## Autor

Tarea de Apps Móviles - 2026

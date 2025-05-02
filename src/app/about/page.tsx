
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Package, Braces, Palette, Database, Filter, ArrowDownUp, MapPin, Loader, AlertTriangle, MessageSquare, FileCode } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">
        Acerca de este Proyecto: Catálogo de Terrenos en Chile
      </h1>

      <Card className="mb-6 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="w-6 h-6 text-accent" />
            Introducción
          </CardTitle>
          <CardDescription>
            Este proyecto es una aplicación web desarrollada con Next.js para explorar y buscar terrenos en venta en Chile.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            El objetivo principal es proporcionar una interfaz intuitiva y eficiente para que los usuarios puedan encontrar terrenos que se ajusten a sus necesidades, utilizando filtros y opciones de ordenación.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6 shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
             <Braces className="w-6 h-6 text-accent" />
            Tecnologías y Desarrollo
          </CardTitle>
          <CardDescription>
             Detalles sobre las herramientas y el proceso de desarrollo.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <section className="mb-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
               <FileCode className="w-5 h-5 text-primary" /> Estructura y Framework
            </h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><strong>Next.js:</strong> Elegido por su renderizado del lado del servidor (SSR), enrutamiento basado en archivos y optimización.</li>
              <li><strong>Estructura de archivos:</strong> Organización modular siguiendo las convenciones de Next.js (`src/app`, `src/components`, `src/hooks`, `src/services`).</li>
              <li><strong>TypeScript:</strong> Utilizado para mejorar la calidad del código, añadir tipado estático y facilitar el mantenimiento.</li>
            </ul>
          </section>

          <section className="mb-4">
             <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Palette className="w-5 h-5 text-primary" /> Interfaz de Usuario (UI)
             </h3>
             <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>ShadCN/UI (Radix UI + Tailwind):</strong> Se usaron componentes predefinidos y personalizables basados en Radix UI y estilizados con Tailwind CSS para una UI moderna y consistente.</li>
                <li><strong>Tailwind CSS:</strong> Para estilizar componentes de forma rápida mediante clases de utilidad.</li>
                <li><strong>Componentes Reutilizables:</strong> Creación de `TerrainCard`, `TerrainFilters`, `MapPlaceholder` para encapsular lógica y presentación.</li>
             </ul>
          </section>

           <section className="mb-4">
             <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" /> Gestión de Datos y Estado
             </h3>
             <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li><strong>Hooks Personalizados (`useTerrains`):</strong> Centraliza la lógica para obtener, filtrar y ordenar los datos de terrenos.</li>
                <li><strong>React Hook Form:</strong> Gestiona el estado y la validación del formulario de filtros.</li>
                <li><strong>Servicio de Catálogo (`terrain-catalog.ts`):</strong> Define interfaces (`Terrain`, `Region`) y simula la obtención de datos (actualmente con datos estáticos).</li>
             </ul>
          </section>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
           <CardTitle className="flex items-center gap-2">
              <Filter className="w-6 h-6 text-accent" />
             Funcionalidades Clave
           </CardTitle>
           <CardDescription>
              Características principales de la aplicación.
           </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
           <ul className="list-disc list-inside space-y-2">
              <li className="flex items-start gap-2">
                 <Filter className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Filtrado:</strong> Permite a los usuarios refinar la búsqueda por región, rango de precios y rango de área.</span>
              </li>
              <li className="flex items-start gap-2">
                 <ArrowDownUp className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Ordenación:</strong> Posibilidad de ordenar los resultados por precio o área (ascendente/descendente).</span>
              </li>
              <li className="flex items-start gap-2">
                 <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Visualización de Terrenos:</strong> Muestra cada terreno en una tarjeta (`TerrainCard`) con detalles clave y un mapa de ubicación placeholder.</span>
              </li>
              <li className="flex items-start gap-2">
                 <Loader className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Indicadores de Carga:</strong> Uso de esqueletos (`CardSkeleton`) para una mejor experiencia de usuario durante la carga de datos.</span>
              </li>
              <li className="flex items-start gap-2">
                 <AlertTriangle className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Manejo de Errores:</strong> Muestra alertas si ocurre un problema al obtener los datos.</span>
              </li>
               <li className="flex items-start gap-2">
                 <MessageSquare className="w-4 h-4 text-primary mt-1 shrink-0" />
                 <span><strong>Notificaciones (Toasts):</strong> Informa al usuario sobre errores o resultados vacíos.</span>
              </li>
           </ul>
        </CardContent>
      </Card>

    </main>
  );
}

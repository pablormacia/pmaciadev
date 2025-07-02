export default function ServiciosPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-center">¿Tenés un negocio?</h1>
      <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
        Ya ayudé a talleres, tiendas y profesionales a organizar sus operaciones. Podés tener tu propia app web para mostrar productos o gestionar órdenes, como hicimos con <a href="https://macbory.com.ar" target="_blank" className="text-blue-600 underline">Macbory</a>.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Gestión de órdenes</h2>
          <p className="text-sm text-gray-700">
            Creamos un sistema donde tus clientes pueden registrar una reparación, recibir un PIN y consultar el estado de su equipo. Ideal para talleres técnicos o servicios.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Catálogo online + WhatsApp</h2>
          <p className="text-sm text-gray-700">
            Mostrá tus productos o servicios en una web moderna, con opción de consulta directa por WhatsApp. Sin necesidad de pagos online si no lo querés.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Administración simple</h2>
          <p className="text-sm text-gray-700">
            Panel de administración personalizado para que vos mismo puedas cargar productos, cambiar precios o actualizar el estado de una orden.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Adaptado a tu realidad</h2>
          <p className="text-sm text-gray-700">
            Trabajo con tecnologías modernas (Next.js, Supabase, Vercel) para darte una solución accesible, escalable y adaptada a lo que necesitás.
          </p>
        </div>
      </div>
    </section>
  );
}

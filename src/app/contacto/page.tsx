export default function ContactoPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center space-y-6">
      <h1 className="text-3xl font-bold">Contacto</h1>
      <p className="text-gray-600 text-lg">
        ¿Querés que trabajemos juntos o tenés una idea? Escribime sin compromiso.
      </p>

      <div className="space-y-4 text-lg">
        <p>
          📞{" "}
          <a
            href="https://wa.me/5491173625098"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            WhatsApp: +54 9 11 7362-5098
          </a>
        </p>
        <p>
          📧{" "}
          <a
            href="mailto:pr.macia@gmail.com"
            className="text-blue-600 hover:underline"
          >
            pr.macia@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

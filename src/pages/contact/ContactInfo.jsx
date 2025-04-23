export function ContactInfo() {
  return (
    <section>
      <div className="flex flex-col gap-10">
        <h1
          className="mb-10 text-6xl leading-tight"
          style={{ fontFamily: "Rubik One" }}
        >
          LET'S TALK COFFEE
        </h1>

        <section className="mb-10">
          <h2 className="mb-2 text-lg font-bold">Hours</h2>
          <p className="text-base leading-[1rem]">By Appointment Only</p>
        </section>
        <div className="flex gap-20">
          <section className="mb-10">
            <h2 className="mb-2 text-lg font-bold">Phone</h2>
            <p className="text-base">604-555-0123</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold">Email</h2>
            <a
              href="mailto:admin@originscoffee.com"
              className="text-base underline "
            >
              admin@originscoffee.com
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <AnyName name="Russian war" />
      <AnyName name="Americal War" />
      <AnyName name="Indo War" />
    </div>
  );
}

function AnyName({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        reiciendis, nisi dolores quis nesciunt sit quibusdam, aspernatur nam
        earum perspiciatis at! Reiciendis voluptate nisi saepe illum
        necessitatibus ea mollitia natus rerum commodi blanditiis! Quisquam
        officiis architecto dolor sunt, quia possimus excepturi accusantium
        eveniet molestias dignissimos labore dolores doloribus maxime nemo ullam
        incidunt sint enim atque blanditiis. Repudiandae dolore quam pariatur
        incidunt. Aliquam, repellendus. Consequatur provident eos doloribus
        voluptates iusto, esse soluta dolores, praesentium temporibus blanditiis
        neque maiores nulla quia repellat delectus tempora accusamus, ut unde a
        ratione qui eligendi obcaecati! Mollitia praesentium culpa velit earum
        tenetur. Maxime nam reprehenderit repellendus!
      </p>
    </div>
  );
}

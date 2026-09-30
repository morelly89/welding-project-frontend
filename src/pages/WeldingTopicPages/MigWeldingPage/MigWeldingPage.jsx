import "./MigWeldingPage.css";

function MigWeldingPage() {
  return (
    <main className="mig-page">
      <section className="mig-page__hero">
        <div className="mig-page__container">
          <h1 className="mig-page__title">MIG Welding</h1>

          <p>
            I'm pretty sure you've heard people say, “MIG welding this, MIG
            welding that,” while you're standing there ready to rip off your
            hat. No—don't do that. I'm just trying to rhyme, pal.
          </p>

          <p>
            MIG stands for <strong>Metal Inert Gas</strong>. So what gas are we
            using—89 premium or 87 regular? None of that, pal. In MIG welding,
            we use a shielding gas, often an argon-based mixture.
          </p>

          <p>
            For mild steel, a common choice is argon mixed with CO₂. Why argon?
            Because argon is an inert gas, meaning it doesn't react easily with
            other elements. That makes it useful for protecting the molten weld
            puddle from contamination in the surrounding air.
          </p>

          <p>
            So how does MIG welding actually work? It starts with the MIG gun.
            When you squeeze the trigger, the machine begins feeding wire
            through the gun while shielding gas flows through the nozzle.
          </p>

          <p>
            That wire acts as both the electrode and the filler metal. With a
            typical solid-wire MIG setup, the electrode is connected to{" "}
            <strong>DC positive</strong>, while the work clamp helps complete
            the electrical circuit through the workpiece.
          </p>

          <p>
            As the wire approaches the metal, an electrical arc forms between
            them. That arc produces enough heat to melt the incoming wire and
            part of the base metal, creating a molten weld puddle.
          </p>

          <p>
            As you move the gun along the joint, more wire is continuously fed
            into the puddle. The shielding gas protects the molten metal while
            it is exposed to the atmosphere, and as the puddle cools, it
            solidifies into the finished weld.
          </p>

          <p className="mig-page__highlight">
            That's MIG welding in a nutshell:{" "}
            <strong>
              wire, electricity, shielding gas, and controlled movement all
              working together to join metal.
            </strong>
          </p>
        </div>
      </section>

      <section className="mig-page__section">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">Wire, Gas & Material</h2>

          <p>
            Guess what, pal? There's something you need to know: welding gas is
            not singular—it's plural. Many. Plenty. Poly! 😂
          </p>

          <p>
            There's more than one shielding gas and more than one gas mixture
            used in MIG welding, and each one behaves a little differently. I'm
            going to show you a few common ones, what materials they're used
            with, and whyyyyy we use them.
          </p>

          <div className="mig-page__cards">
            <article className="mig-page__card">
              <h3>Mild Steel</h3>
              <p>Common wire: ER70S-6</p>
              <p>Common gas: 75% Argon / 25% CO₂</p>
            </article>

            <article className="mig-page__card">
              <h3>Stainless Steel</h3>
              <p>Common wire: ER308L or ER316L</p>
              <p>Shielding gas varies depending on the application.</p>
            </article>

            <article className="mig-page__card">
              <h3>Aluminum</h3>
              <p>Common wire: ER4043 or ER5356</p>
              <p>Common gas: 100% Argon</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mig-page__section">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">MIG Welding Technique</h2>

          <p>
            Now that you know what MIG welding is, here comes the part that
            actually makes or breaks the weld: technique.
          </p>

          <p>
            You can have the right wire, the right gas, and perfect machine
            settings, but if your gun angle is all over the place or you're
            moving like you're late for work, the weld is probably going to let
            you know. 😂
          </p>

          <div className="mig-page__technique-list">
            <div className="mig-page__technique-item">
              <h3>Stickout</h3>
              <p>
                Keep a consistent distance between the contact tip and the
                workpiece.
              </p>
            </div>

            <div className="mig-page__technique-item">
              <h3>Gun Angle</h3>
              <p>
                Keep your gun position controlled instead of constantly changing
                angles.
              </p>
            </div>

            <div className="mig-page__technique-item">
              <h3>Travel Speed</h3>
              <p>
                Moving too fast or too slowly can completely change the shape
                and penetration of the weld.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mig-page__section">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">
            What I've Learned From Experience
          </h2>

          <p>
            One thing I've noticed about MIG welding is how versatile it is. It
            works really well for heavier fabrication where speed and
            penetration matter, but it's also extremely useful for sheet-metal
            work.
          </p>

          <p>
            For example, if I'm fabricating something like a cabinet, table, or
            sheet-metal corner that is going to be ground smooth afterward, MIG
            can make a lot more sense than TIG. You can weld the joint quickly,
            grind it into shape, and move on.
          </p>

          <p>
            Another thing I learned is to pay attention to the MIG gun cable.
            Try to keep it as straight and relaxed as possible while you're
            welding. Don't kink or sharply bend the cable.
          </p>

          <p>
            The wire has to travel through a liner inside that cable, and
            excessive bends or damage to the liner can cause poor wire feeding
            or even make the wire jam.
          </p>

          <p>
            I also learned to always check the drive rolls inside the machine.
            Different wire diameters use different grooves in the drive roll.
          </p>

          <p>
            For example, if you're running .035" wire, make sure the wire is
            riding in the .035" groove. If you switch to .045" wire, use the
            correct .045" groove.
          </p>
        </div>
      </section>

      <section className="mig-page__section">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">
            Tips for Beginners: Things I Wish I Learned Earlier
          </h2>

          <p>
            When I first started welding, I was like, “Yayyy, this is so cool!”
            especially in welding school. 😂
          </p>

          <p>
            I even thought the test coupons we practiced on were prototypes of
            actual components. I thought welding was basically just: weld, weld,
            weld.
          </p>

          <p>
            Then they started teaching us math, fractions, how to read a tape
            measure, and even some trigonometry. That's when I started realizing
            that welding is only one part of metal fabrication.
          </p>

          <p>
            You're going to work with all kinds of shapes and materials: square
            tubing, rectangular tubing, channels, C-channels, rods, plate,
            aluminum, stainless steel, copper, and more.
          </p>

          <p>
            My advice is to keep learning everything around welding, not just
            welding itself. Learn how to read prints. Learn layout. Learn
            fractions and basic geometry. Learn about metallurgy.
          </p>
        </div>
      </section>

      <section className="mig-page__section">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">
            Common MIG Welding Problems
          </h2>

          <div className="mig-page__problem">
            <h3>Mistake #1: Pointing a Fan at Your Weld</h3>

            <p>
              It's your first day at a fab shop. The boss gives you 12 frames to
              square up and weld, and it's 95°F inside the shop. Naturally, you
              turn a fan on and point it right at yourself while you work.
            </p>

            <p>
              Then you notice ugly little holes in your weld. That moving air
              can blow away your shielding gas and leave the molten weld exposed
              to the atmosphere, which can cause porosity.
            </p>

            <p>
              So yeah—stay cool, but don't aim strong airflow directly at the
              weld zone.
            </p>
          </div>
        </div>
      </section>

      <section className="mig-page__section mig-page__section--final">
        <div className="mig-page__container">
          <h2 className="mig-page__section-title">Final Thoughts</h2>

          <p>
            MIG welding can look simple from the outside: pull the trigger, feed
            the wire, and make a weld. But the more you use it, the more you
            realize there's a lot happening at the same time—wire feed, gas
            coverage, fit-up, heat, travel speed, gun angle, and your own body
            position.
          </p>

          <p>
            What I've learned is that getting better at MIG isn't about trying
            to look fancy. It's about understanding what the machine is doing,
            paying attention to the puddle, learning from bad welds, and
            repeating the basics until they become natural.
          </p>

          <p>
            If you're a beginner, don't get discouraged when your welds look
            ugly at first. Every bad bead is trying to teach you something.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MigWeldingPage;

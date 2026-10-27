import "./StickWeldingPage.css";

function StickWeldingPage() {
  return (
    <main className="stick-page">
      <section className="stick-page__hero">
        <div className="stick-page__container">
          <h1 className="stick-page__title">Stick Welding</h1>

          <p>
            Stick welding! Now this is one of those welding processes that looks
            simple from the outside. You grab a rod, strike an arc, and start
            welding, right? Easy, pal. 😂 Not quite.
          </p>

          <p>
            Stick welding is also called{" "}
            <strong>Shielded Metal Arc Welding</strong>, or SMAW.
          </p>

          <p>
            Instead of feeding wire continuously like MIG, stick welding uses a
            consumable electrode coated in flux.
          </p>

          <p>
            When you strike the arc, the electrode begins to melt and becomes
            the filler metal. At the same time, the flux coating breaks down and
            helps protect the molten weld puddle from the surrounding
            atmosphere.
          </p>

          <p>
            As the weld cools, the flux also forms a layer of slag over the
            weld, which you remove afterward.
          </p>

          <p>
            That’s stick welding in a nutshell: the electrode provides the
            filler, the flux provides protection, and your job is to control the
            arc length, rod angle, travel speed, and puddle.
          </p>
        </div>
      </section>

      <section className="stick-page__section">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">
            Electrode, Polarity & Material
          </h2>

          <p>
            Alright pal, now we need to talk about electrodes. Stick welding has
            different rods for different jobs, and those numbers printed on the
            electrode actually mean something.
          </p>

          <div className="stick-page__cards">
            <article className="stick-page__card">
              <h3>E6010</h3>
              <p>Common use: Root passes, pipe, dirty steel</p>
              <p>Penetration: Deep</p>
              <p>Typical polarity: DCEP</p>
            </article>

            <article className="stick-page__card">
              <h3>E6011</h3>
              <p>Common use: Repair work and less-clean steel</p>
              <p>Penetration: Deep</p>
              <p>Typical polarity: AC or DCEP</p>
            </article>

            <article className="stick-page__card">
              <h3>E6013</h3>
              <p>Common use: General-purpose light fabrication</p>
              <p>Penetration: Light to moderate</p>
              <p>Typical polarity: AC, DCEN, or DCEP</p>
            </article>

            <article className="stick-page__card">
              <h3>E7018</h3>
              <p>Common use: Structural steel and fabrication</p>
              <p>Penetration: Moderate</p>
              <p>Typical polarity: DCEP or AC depending on electrode</p>
            </article>
          </div>
        </div>
      </section>

      <section className="stick-page__section">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">Stick Welding Technique</h2>

          <div className="stick-page__technique-list">
            <div className="stick-page__technique-item">
              <h3>Arc Length</h3>
              <p>
                Keep your arc length controlled and consistent. Too long of an
                arc can make the weld unstable and increase spatter.
              </p>
            </div>

            <div className="stick-page__technique-item">
              <h3>Rod Angle</h3>
              <p>
                Keep a consistent rod angle so the arc stays focused where you
                actually want the weld puddle to go.
              </p>
            </div>

            <div className="stick-page__technique-item">
              <h3>Travel Speed</h3>
              <p>
                Move too fast and you may not deposit enough metal. Move too
                slowly and the puddle can become too large.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stick-page__section">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">
            What I've Learned From Experience
          </h2>

          <p>
            One thing I learned about stick welding is that striking the arc is
            a skill by itself, pal. 😂 When you're new, the rod loves to stick
            to the plate right when you're trying to look like you know what
            you're doing.
          </p>

          <p>
            I also learned that arc length matters a lot. If you hold the rod
            too far away, the arc gets wild, the spatter increases, and the weld
            can get ugly. Keeping a short, controlled arc usually gives you much
            better control of the puddle.
          </p>

          <p>
            Another thing I learned is that every electrode behaves differently.
            A 6010 does not run like a 7018, and a 7018 does not run like a
            6013. You have to learn how each rod likes to be held, how fast it
            likes to move, and what kind of puddle it gives you.
          </p>

          <p>
            Slag taught me a lot too. You don't just weld and forget about it.
            You need to clean the slag between passes, especially on multi-pass
            welds, or you can trap slag inside the weld and create defects.
          </p>

          <p>
            I also learned that rod angle and body position can make a huge
            difference. Before striking the arc, I try to position myself so I
            can travel through the whole joint smoothly instead of twisting my
            wrist halfway through the weld.
          </p>

          <p>
            Stick welding also taught me to pay attention to sound and puddle
            behavior. After enough practice, you start noticing when the rod is
            running right and when something is off just by the way the arc
            sounds and how the puddle moves.
          </p>

          <p>
            The biggest lesson for me is that stick welding looks simple, but it
            teaches you a lot about arc control, penetration, electrode
            behavior, and reading the puddle.
          </p>
        </div>
      </section>
      <section className="stick-page__section">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">
            Tips for Beginners: Things I Wish I Learned Earlier
          </h2>

          <p>
            First thing, pal: don’t get discouraged when the rod keeps sticking.
            Almost everybody fights that in the beginning. Striking an arc and
            keeping it alive takes practice.
          </p>

          <p>
            Learn what electrode you’re using before you start welding. A 6010,
            6011, 6013, and 7018 are not all meant to be run the same way, so
            check the rod, polarity, and recommended amperage range.
          </p>

          <p>
            Don’t just watch the end of the electrode. Watch the weld puddle and
            the edges of the joint. That is where you can actually see whether
            the weld is tying into the base metal properly.
          </p>

          <p>
            Keep your arc short. Beginners often pull the rod too far away
            because they’re afraid of sticking it, but a long arc usually makes
            the weld harder to control and creates more spatter.
          </p>

          <p>
            Clean the slag before you weld over a previous pass. If slag gets
            trapped between passes, you can create slag inclusions inside the
            weld.
          </p>

          <p>
            Get comfortable before you strike the arc. Make sure your body and
            hands can move through the whole weld without suddenly running out
            of room halfway through.
          </p>

          <p>
            And probably the biggest beginner tip: burn rods. You can read about
            stick welding all day, but arc control comes from actually welding.
            Run beads, look at what happened, adjust one thing, and run another
            bead.
          </p>
        </div>
      </section>
      <section className="stick-page__section">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">
            Common Stick Welding Problems
          </h2>

          <div className="stick-page__problem">
            <h3>Rod Keeps Sticking</h3>

            <p>
              This is probably one of the first problems every beginner runs
              into. The rod can stick if your amperage is too low, your arc is
              too short, or you hesitate too much when striking the arc.
            </p>

            <p>
              Don’t panic when it happens, pal. 😂 Break the rod loose, check
              your settings, and try again with a smoother arc strike.
            </p>
          </div>

          <div className="stick-page__problem">
            <h3>Too Much Spatter</h3>

            <p>
              Excessive spatter can come from running too long of an arc, using
              too much amperage, or running the wrong settings for the
              electrode.
            </p>

            <p>
              A shorter, more controlled arc usually helps calm things down.
            </p>
          </div>

          <div className="stick-page__problem">
            <h3>Slag Inclusion</h3>

            <p>
              Slag inclusion happens when slag gets trapped inside the weld
              instead of floating to the surface.
            </p>

            <p>
              This can happen from poor cleaning between passes, bad rod angle,
              incorrect travel speed, or not getting proper fusion into the
              sides of the joint.
            </p>
          </div>

          <div className="stick-page__problem">
            <h3>Porosity</h3>

            <p>
              Porosity shows up as small holes or gas pockets in the weld. Dirty
              material, moisture, contaminated electrodes, or welding over oil,
              rust, paint, or grease can all contribute to it.
            </p>

            <p>
              Clean the joint and make sure your electrodes are stored properly
              before welding.
            </p>
          </div>

          <div className="stick-page__problem">
            <h3>Undercut</h3>

            <p>
              Undercut is a groove that forms along the edge of the weld where
              base metal has melted away and was not properly filled back in.
            </p>

            <p>
              Too much amperage, traveling too fast, holding too long of an arc,
              or using a poor electrode angle can all contribute to undercut.
            </p>
          </div>

          <div className="stick-page__problem">
            <h3>Poor Fusion</h3>

            <p>
              Sometimes a weld can look decent on top but still fail to properly
              fuse into the base metal.
            </p>

            <p>
              Low amperage, moving too fast, incorrect rod angle, or welding
              over heavy contamination can all reduce fusion.
            </p>
          </div>
        </div>
      </section>

      <section className="stick-page__section stick-page__section--final">
        <div className="stick-page__container">
          <h2 className="stick-page__section-title">Final Thoughts</h2>

          <p>
            Stick welding is one of those processes that looks basic until you
            actually try to control it well.
          </p>

          <p>
            There is no wire feeder, no foot pedal, and no fancy setup doing the
            work for you. It is just you, the electrode, the arc, and the
            puddle, pal.
          </p>

          <p>
            That is why I think stick welding teaches you a lot about real arc
            control. You learn to pay attention to sound, rod angle, arc length,
            travel speed, penetration, and how the puddle is reacting.
          </p>

          <p>
            It can be frustrating in the beginning, especially when the rod
            keeps sticking or the slag does not come off the way you want. But
            once you start understanding what the electrode is doing, everything
            starts to make more sense.
          </p>

          <p>
            My biggest advice is simple: burn rods, inspect your welds, figure
            out what went wrong, and run another one. That repetition is where
            the real learning happens.
          </p>
        </div>
      </section>
    </main>
  );
}

export default StickWeldingPage;

import tigArcLengthImage from "../../../assets/tig-arc-length.png";
import "./TigWeldingPage.css";

function TigWeldingPage() {
  return (
    <main className="tig-page">
      <section className="tig-page__hero">
        <div className="tig-page__container">
          <h1 className="tig-page__title">TIG Welding</h1>

          <p>
            TIG welding! I’m pretty sure you’ve heard people talk about TIG
            welding too.
          </p>

          <p>
            I remember when I was a newb, I used to hear people say things like,
            “I’m a good welder, I can TIG and MIG!” and I’d just stand there
            feeling dumb because I had no idea what they meant. 😂
          </p>

          <p>
            But anyway, TIG stands for <strong>Tungsten Inert Gas</strong>. The
            more technical name is <strong>Gas Tungsten Arc Welding</strong>, or
            GTAW.
          </p>

          <p>So why tungsten, pal?</p>

          <p>
            Because tungsten can take an insane amount of heat. It has an
            extremely high melting point, which makes it very difficult to melt
            under normal TIG welding conditions. That’s why it works so well as
            a non-consumable electrode.
          </p>

          <p>
            In TIG welding, the tungsten electrode carries the current and
            establishes the arc, but unlike MIG wire, it normally does not
            become part of the weld.
          </p>

          <p>
            That’s one of the big differences between TIG and MIG: with MIG, the
            wire is continuously fed and becomes filler metal. With TIG, the
            tungsten creates the arc, while filler rod—if needed—is added
            separately by hand.
          </p>
        </div>
      </section>
      <section className="tig-page__section">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">TIG Welding Technique</h2>

          <div className="tig-page__technique-list">
            <div className="tig-page__technique-item">
              <h3>Puddle Formation</h3>

              <p>
                One of the first things I learned is not to rush the filler rod.
                After you strike the arc, watch the base metal and wait until
                you see a small molten puddle begin to form.
              </p>

              <p>
                Once that puddle is established, you can start adding filler
                metal. If you start throwing filler rod at cold material before
                the puddle forms, pal, you’re basically poking metal with
                another piece of metal. 😂
              </p>
            </div>

            <div className="tig-page__technique-item">
              <h3>Pedal Control</h3>

              <p>
                The foot pedal controls how much amperage the machine can
                deliver. After some practice, you start learning how much heat
                different materials and thicknesses actually need.
              </p>

              <p>
                Stainless steel is a good example. Too much heat can cause heavy
                discoloration and oxidation, so you want to control the pedal
                and keep moving instead of sitting in one spot cooking the
                material.
              </p>
            </div>

            <div className="tig-page__technique-item">
              <h3>Arc Length</h3>

              <p>
                Arc length is the distance between the tip of the tungsten
                electrode and the base material.
              </p>

              <p>
                You want to keep that distance short and consistent, pal. A good
                beginner target is around <strong>1/16 of an inch</strong>,
                although the exact distance can vary depending on the material,
                joint, tungsten size, and welding conditions.
              </p>

              <p>
                If the tungsten is too far away, the arc becomes wider and less
                focused. If you get too close, you can dip the tungsten directly
                into the puddle and contaminate it.
              </p>

              <p>
                Think of it like the picture below: keep the tungsten close
                enough to maintain a tight, stable arc, but not so close that
                you touch the weld puddle.
              </p>

              <img
                className="tig-page__technique-image"
                src={tigArcLengthImage}
                alt="TIG welding arc length showing approximately one-sixteenth of an inch between the tungsten and base material"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tig-page__section">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">Tungsten, Gas & Material</h2>

          <p>
            Alright pal, now we need to talk about tungsten, filler rod, gas,
            and the material you’re actually welding.
          </p>

          <p>
            TIG welding gives you a lot of control, but that also means you have
            a few more choices to make compared with MIG. You need to think
            about what tungsten you’re using, what filler rod matches the base
            metal, what shielding gas you need, and whether you’re welding on AC
            or DC.
          </p>

          <div className="tig-page__cards">
            <article className="tig-page__card">
              <h3>Mild Steel</h3>
              <p>Common filler: ER70S-2 or ER70S-6</p>
              <p>Common tungsten: 2% lanthanated</p>
              <p>Common gas: 100% Argon</p>
              <p>Typical polarity: DCEN</p>
            </article>

            <article className="tig-page__card">
              <h3>Stainless Steel</h3>
              <p>Common filler: ER308L or ER316L</p>
              <p>Common tungsten: 2% lanthanated</p>
              <p>Common gas: 100% Argon</p>
              <p>Typical polarity: DCEN</p>
            </article>

            <article className="tig-page__card">
              <h3>Aluminum</h3>
              <p>Common filler: ER4043 or ER5356</p>
              <p>Common tungsten: 2% lanthanated</p>
              <p>Common gas: 100% Argon</p>
              <p>Typical polarity: AC</p>
            </article>
          </div>
        </div>
      </section>

      <section className="tig-page__section">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">
            What I've Learned From Experience
          </h2>

          <p>
            One thing I learned about TIG welding is that patience matters a
            lot. MIG can be fast, but TIG will expose you real quick if you
            start rushing, pal. 😂
          </p>

          <p>
            I also learned that cleanliness matters way more with TIG. If the
            material is dirty, oily, oxidized, or contaminated, the puddle can
            get ugly fast. Cleaning the material properly before welding can
            make a huge difference.
          </p>

          <p>
            Aluminum is a perfect example. Before welding aluminum, I like to
            clean the surface with acetone or another suitable cleaner to remove
            oil and grease. Then I make sure the oxide layer is cleaned too,
            usually with a dedicated stainless-steel wire brush.
          </p>

          <p>
            Another thing I learned is to keep your tungsten clean. If you dip
            it into the puddle or touch the filler rod with it, stop and regrind
            it. Trying to keep welding with contaminated tungsten usually makes
            the arc less stable and the puddle harder to control.
          </p>

          <p>
            When welding aluminum, pay attention to how your tungsten is
            prepared too, pal. Older AC TIG setups often used a balled tungsten,
            but many modern inverter machines work better with alloyed tungsten
            prepared to a point or slightly truncated tip.
          </p>

          <p>
            One tungsten you may see is purple E3 tungsten. It is a rare-earth
            blend that can be used for both AC and DC TIG welding. The exact
            tungsten prep depends on the machine and electrode, so I would
            always check the machine manufacturer's recommendation instead of
            assuming every aluminum setup needs a balled tungsten.
          </p>

          <p>
            Body position matters too. TIG is all about control, so I try to get
            comfortable before I start. I like to brace my hands when possible
            and make sure I can move smoothly through the whole joint before
            striking the arc.
          </p>

          <p>
            I also learned not to chase the filler rod. First establish the
            puddle, then add filler with control. The torch hand and filler hand
            have to work together without fighting each other.
          </p>

          <p>
            The biggest lesson for me is that TIG is not about moving fast or
            trying to look fancy. It is about control, consistency, cleanliness,
            and knowing what the puddle is telling you.
          </p>
        </div>
      </section>
      <section className="tig-page__section">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">
            Tips for Beginners: Things I Wish I Learned Earlier
          </h2>

          <p>
            One thing I wish I learned earlier was what AC is actually doing
            behind the scenes when TIG welding aluminum.
          </p>

          <p>
            When you weld aluminum on AC, the current keeps switching direction.
            One part of the cycle gives you more penetration into the base
            metal, while the other part helps clean the aluminum oxide from the
            surface.
          </p>

          <p>
            That's also why AC balance and AC frequency matter, pal. Balance
            changes how much of the cycle is focused on cleaning versus
            penetration, while frequency changes how fast the current switches
            back and forth.
          </p>

          <p>
            Understanding that can also help you control the weld puddle better.
            In some situations you want a smaller, tighter puddle instead of a
            wide one, and AC frequency can help you focus the arc and control
            where the heat is going.
          </p>

          <p>
            Once I understood that, AC stopped feeling like some mysterious
            aluminum setting and started making a lot more sense.
          </p>
        </div>
      </section>

      <section className="tig-page__section">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">
            Common TIG Welding Problems
          </h2>

          <div className="tig-page__problem">
            <h3>Mistake #1: Contaminating the Tungsten</h3>

            <p>
              One of the most common TIG mistakes is dipping the tungsten into
              the puddle or touching it with the filler rod.
            </p>

            <p>
              Once the tungsten is contaminated, the arc can become unstable and
              the weld can get harder to control. If that happens, pal, stop and
              clean or regrind the tungsten instead of trying to fight through
              it.
            </p>
          </div>

          <div className="tig-page__problem">
            <h3>Mistake #2: Poor Gas Coverage</h3>

            <p>
              TIG depends heavily on shielding gas. If the gas flow is too low,
              the cup is too far from the weld, or air is blowing across the
              work area, the weld can oxidize and become contaminated.
            </p>

            <p>
              Stainless steel will often show this quickly through heavy
              discoloration, and aluminum can become dirty and difficult to
              control.
            </p>
          </div>

          <div className="tig-page__problem">
            <h3>Mistake #3: Using Too Much Heat</h3>

            <p>
              Too much amperage or staying in one spot too long can overheat the
              material. This is especially noticeable on thin stainless steel
              and aluminum.
            </p>

            <p>
              More pedal does not always mean a better weld, pal. Learn to use
              enough heat to establish the puddle, then keep the weld moving.
            </p>
          </div>

          <div className="tig-page__problem">
            <h3>Mistake #4: Welding Dirty Material</h3>

            <p>
              TIG is not very forgiving when the material is covered in oil,
              grease, oxidation, paint, or other contamination.
            </p>

            <p>
              Clean the joint before welding. With aluminum, this can mean
              removing grease with a suitable cleaner such as acetone and
              removing the oxide layer with a dedicated stainless-steel brush.
            </p>
          </div>
        </div>
      </section>
      <section className="tig-page__section tig-page__section--final">
        <div className="tig-page__container">
          <h2 className="tig-page__section-title">Final Thoughts</h2>

          <p>
            TIG welding can be frustrating at first because it demands a lot
            from you at the same time—torch control, filler control, heat
            control, puddle awareness, and patience.
          </p>

          <p>
            But that’s also what makes it rewarding. Once you start
            understanding what the arc is doing and why the puddle reacts the
            way it does, TIG starts feeling less like magic and more like a
            process you can actually control.
          </p>

          <p>
            My advice is simple: don’t rush it, pal. Focus on understanding the
            process, keep practicing the basics, and pay attention to what each
            weld is teaching you.
          </p>

          <p>
            A clean TIG weld looks nice, sure—but the real goal is knowing why
            it came out clean in the first place.
          </p>
        </div>
      </section>
    </main>
  );
}

export default TigWeldingPage;

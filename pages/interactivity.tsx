import CssPropertyList from "@/components/css-property-list";
import Head from "next/head";

const InteractivityPage = () => {
  return (
    <>
      <Head>
        <title>Interactivity</title>
      </Head>

      <div className="">
        <h2>Interactivity</h2>

        {/* Hover State Styling */}
        <div className="mb-4">
          <h3>Hover State Styling</h3>
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 hover:bg-orange-500 hover:text-white">
              Submit
            </button>
          </div>
        </div>

        {/* Focus State Styling */}
        <div className="mb-4">
          <h3>Hover State Styling</h3>
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 focus:bg-green-500 focus:text-white">
              Submit
            </button>
          </div>
        </div>

        {/* Active State Styling */}
        <div className="mb-4">
          <h3>Active State Styling</h3>
          <div>
            <button className="bg-black text-white py-3 px-5 rounded-lg m-3 active:bg-yellow-500 active:text-white">
              Submit
            </button>
          </div>
        </div>

        {/* Styling based on parent state */}
        <div className="mb-4">
          <h3>Styling based on parent state</h3>
          <div>
            <a className="group block max-w-xs mx-auto rounded-lg p-6 bg-white shadow-lg space-y-3 hover:bg-sky-500">
              <h3 className="group-hover:text-white">Card Title</h3>
              <p className="group-hover:text-white">This is the card text</p>
            </a>
          </div>
        </div>

        {/* Pseudo Classes */}
        <div className="mb-4">
          <h3>Pseudo Classes</h3>
          <ul>
            <li className="first:bg-red-200">Item 1</li>
            <li className="even:bg-sky-200 odd:bg-yellow-200">Item 2</li>
            <li className="even:bg-sky-200 odd:bg-yellow-200">Item 3</li>
            <li className="even:bg-sky-200 odd:bg-yellow-200">Item 4</li>
            <li className="even:bg-sky-200 odd:bg-yellow-200">Item 5</li>
            <li className="even:bg-sky-200 odd:bg-yellow-200">Item 6</li>
          </ul>
        </div>

        {/* Appearance */}
        {/* Use appearance-none to reset any browser specific styling on an element. This utility is often used when creating custom form components. */}

        <div className="mb-4">
          <h3>Appearance</h3>
          <p>
            Use appearance-none to reset any browser specific styling on an
            element. This utility is often used when creating custom form
            components.
          </p>

          <select className="appearance-none">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Cursor */}
        <div className="mb-4">
          <h3>Cursor</h3>
          <button className="bg-black text-white py-3 px-5 rounded-lg m-3 cursor-not-allowed">
            Submit
          </button>
          <p className="cursor-pointer">Hello</p>
          <div className="mt-2">
            <CssPropertyList
              title="cursor classes document"
              cssProperties={[
                {
                  label: "cursor-auto",
                  value: "cursor: auto;",
                },
                {
                  label: "cursor-default",
                  value: "cursor: default;",
                },
                {
                  label: "cursor-pointer",
                  value: "cursor: pointer;",
                },
                {
                  label: "cursor-wait",
                  value: "cursor: wait;",
                },
                {
                  label: "cursor-text",
                  value: "cursor: text;",
                },
                {
                  label: "cursor-move",
                  value: "cursor:move;",
                },
                {
                  label: "cursor-help",
                  value: "cursor: help;",
                },
                {
                  label: "cursor-not-allowed",
                  value: "cursor: not-allowed;",
                },
                {
                  label: "cursor-none",
                  value: "cursor: none;",
                },
                {
                  label: "cursor-context-menu",
                  value: "cursor: context-menu;",
                },
                {
                  label: "cursor-progress",
                  value: "cursor: progress;",
                },
                {
                  label: "cursor-cell",
                  value: "cursor: cell;",
                },
                {
                  label: "cursor-crosshair",
                  value: "cursor: crosshair;",
                },
                {
                  label: "cursor-vertical-text ",
                  value: "cursor: vertical-text;",
                },
                {
                  value: "cursor: alias",
                  label: "cursor-alias",
                },
                {
                  label: "cursor-copy",
                  value: "cursor: copy;",
                },
                {
                  label: "cursor-no-drop",
                  value: "cursor: no-drop;",
                },
                {
                  label: "cursor-grab",
                  value: "cursor: grab;",
                },
                {
                  label: "cursor-grabbing",
                  value: "cursor: grabbing;",
                },
                {
                  label: "cursor-all-scroll",
                  value: "cursor: all-scroll;",
                },
                {
                  label: "cursor-col-resize",
                  value: "cursor: col-resize;",
                },
                {
                  value: "cursor: row-resize;",
                  label: "cursor-row-resize",
                },
                {
                  label: "cursor-n-resize",
                  value: "cursor: n-resize;",
                },
              ]}
            />
          </div>
        </div>

        {/* User Select */}
        <div className="mb-4">
          <h3>User Select</h3>
          <ul>
            <li>
              <p>select-none</p>
              <span className="select-none">Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <p>select-all</p>
              <span className="select-all">Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <p>select-text</p>
              <span className="select-text">Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <p>select-auto</p>
              <span className="select-auto">Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </div>

        {/* Smooth Scroll Example */}
        <div className="mb-4">
          <h3>Smooth Scroll Example</h3>
          <a href="#item" className="block my-6">
            Go To Item
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            consectetur sed corrupti obcaecati expedita, quibusdam aut tempore
            neque facilis unde quas similique fuga excepturi facere velit
            mollitia voluptate quam. Ut possimus quibusdam placeat facilis eum
            eligendi beatae nemo nisi incidunt recusandae velit vel, saepe
            doloremque. Quia, sequi voluptatum. Illum esse sint error saepe
            quidem animi rerum tenetur voluptates praesentium accusantium?
            Maiores repudiandae ullam earum vitae eligendi numquam reprehenderit
            tenetur reiciendis! Quasi officiis doloremque sed harum, fugiat,
            deserunt eius aperiam debitis quibusdam vel, repudiandae obcaecati a
            corrupti dignissimos aliquid? Expedita, possimus culpa quibusdam
            doloribus maxime saepe ex esse ipsa! Possimus, temporibus cupiditate
            laborum eum nobis voluptatem iusto voluptatibus, sunt, id obcaecati
            minus voluptatum sint adipisci iste dolorem? Blanditiis porro modi,
            quidem autem vero odio quo eaque aperiam atque, distinctio in
            repellat. Inventore, non! Tempore laboriosam distinctio repellendus
            ea architecto natus neque exercitationem aliquam autem aliquid
            cupiditate sit accusantium nemo facilis consequuntur sed cumque,
            fugiat, tempora quibusdam eligendi odit iusto? Delectus eos, nostrum
            quaerat perspiciatis qui vel! Rerum suscipit voluptas aliquid
            deleniti atque accusamus amet quia rem labore iste! Architecto
            ipsam, perspiciatis tempore quae magni minus quia explicabo beatae
            sapiente quasi ut illum veniam facilis, sunt maxime excepturi
            ducimus fugit aspernatur possimus eligendi id accusantium. Vitae
            debitis veniam quisquam facilis eum dolores eaque quos porro
            doloremque, vel reprehenderit cupiditate itaque? Temporibus ratione
            praesentium animi facere consequatur laboriosam, odit magnam ducimus
            molestiae debitis aperiam necessitatibus deleniti eaque facilis sunt
            accusamus eos reprehenderit dolores! Facilis molestiae sed esse
            cupiditate dolor sequi enim quaerat recusandae voluptas, nobis
            aliquid repudiandae assumenda. Ducimus omnis quam esse voluptatibus
            modi est nemo, illum quisquam illo sed veniam, nulla, earum porro
            minima aliquam eum. Blanditiis, odio! Praesentium, harum. Aut rerum
            et impedit numquam dolore nostrum facere alias voluptates
            perferendis! Quod at vero consequuntur modi earum accusamus optio,
            error, doloribus enim reiciendis nihil consequatur ullam tenetur cum
            illum vitae aut quibusdam voluptates voluptatem. Rem aliquid placeat
            ipsum voluptates neque recusandae dignissimos explicabo animi
            asperiores, odio quae accusantium magni molestias error aspernatur
            eligendi, ullam eveniet illum aperiam labore repellendus? Sed quam
            minus cumque illum blanditiis, esse praesentium mollitia nam nulla
            suscipit numquam eaque necessitatibus veritatis, odio vitae itaque
            impedit expedita? Esse, magni suscipit laboriosam maxime aut nihil
            error a aperiam asperiores. Id rerum maxime sapiente laboriosam at.
            Sit vitae nostrum labore aspernatur dolores sequi, nobis blanditiis
            inventore atque vero excepturi placeat quod minus aut quia nam
            tenetur, quibusdam soluta error quisquam quidem?
          </p>
          <div id="item">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Asperiores, temporibus blanditiis a accusamus quam sunt! Excepturi
            non hic optio architecto quod doloremque inventore incidunt delectus
            omnis ex modi, assumenda ipsum eveniet unde ut pariatur quos ipsa.
            Quidem dolorem minima impedit, fuga iure necessitatibus harum,
            consectetur repellat unde facilis assumenda nihil.
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractivityPage;

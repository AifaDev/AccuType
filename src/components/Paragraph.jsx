export default function Paragraph({ ...props }) {
  return (
    <div {...props}>
      <div className="relative md:text-4xl xm:text-3xl text-2xl md:px-[5%] leading-normal text-paragraph dark:text-paragraph-dark">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
        impedit quidem sed dolores quia optio placeat voluptatum, tempora eum
        laudantium esse libero vel corporis, illo debitis enim sint
        necessitatibus eligendi.
        <input
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck="false"
          className="left-0 top-0 right-0 bottom-0 m-0 p-0 border-none outline-none absolute mx-auto w-[90%] opacity-0"
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          list="autocompleteOff"
        />
      </div>
    </div>
  );
}

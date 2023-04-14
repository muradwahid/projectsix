
const Home2VideoModal = () => {
  return (
    <div>
      
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className=" relative">
          <label htmlFor="my-modal-3" className="btn bg-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TUD1AWZVgQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home2VideoModal;
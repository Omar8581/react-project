import React from 'react'

function Student() {
  return (
    <div>
        <section className="student" id='stud'>
  <div className="container">
    <h2>PROGRAMS WE OFFER</h2>
    <p>
      Maecenas felis felis, vulputate sit amet mauris et, semper aliquam ligula.
      Integer <br />
      efficitur tellus metus, sed feugiat leo posuere ac. Morbi vitae tincidunt
      mi, et <br />
      malesuada massa.
    </p>
    <div className="box text-start">
      <div className="box1">
        <div className="card" style={{ width: "32rem" }}>
          <img src="img/blog1.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Faculty of Science</h5>
            <p className="card-text">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="text-start">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="box1">
        <div className="card" style={{ width: "32rem" }}>
          <img src="img/blog2.jpg.webp" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Faculty of Art</h5>
            <p className="card-text">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <a href="#" className="">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Student
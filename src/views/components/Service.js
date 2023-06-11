function Service({ img, title, list }) {
      return (
            <div class="services-row-3-col-2">
                  <div class="services-row-3-col-1-inn">
                        <img src={img} alt="" />
                        <h4>{title}</h4>
                        <ul>
                              {
                                    list.map(elem => (
                                          <li>
                                                <a href="#">{elem}</a>
                                          </li>
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      )
}

export default Service
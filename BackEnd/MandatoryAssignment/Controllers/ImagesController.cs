using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MandatoryAssignment.Controllers
{
    [Route("api/[controller]")]
    public class ImagesController : Controller
    {
        // GET api/images
        [HttpGet]
        public IEnumerable<string> Get()
        {

            return ImageHandler.getImages();
        }

        // POST api/values
        [HttpPost("{newImage}")]
        public void Post(String newImage)
        {
            ImageHandler.addImage(newImage);
          
        }

      

    }
}

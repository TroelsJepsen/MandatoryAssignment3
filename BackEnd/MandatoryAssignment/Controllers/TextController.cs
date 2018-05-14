using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MandatoryAssignment
{
    [Route("api/[controller]")]
    public class TextController : Controller
    {
        // GET api/text
        [HttpGet]
        public IEnumerable<string> Get()
        {

            return TextHandler.getText();
        }


        // POST api/values
        [HttpPost("{newText}")]
        public void Post(String newText)
        {
            TextHandler.addText(newText);

        }
    }
}

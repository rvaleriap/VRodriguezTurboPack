using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace SL.Controllers
{
    public class UsuarioController : Controller
    {
       
        public ActionResult GetAll()
        {
            return View();
        }
    }
}

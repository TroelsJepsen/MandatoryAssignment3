using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MandatoryAssignment
{
    public class ImageHandler
    {
        public static String[] getImages()
        {
            List<String> images;
            using (StreamReader reader = new StreamReader("images.json"))
            {
                String jsonString = reader.ReadToEnd();
                images = JsonConvert.DeserializeObject<List<String>>(jsonString);
            }
            return images.ToArray();
        }

        public static void addImage(String newImage)
        {
            List<String> images;
            using (StreamReader reader = new StreamReader("images.json"))
            {
                String jsonString = reader.ReadToEnd();
                images = JsonConvert.DeserializeObject<List<String>>(jsonString);
            }

         
            images.Add(newImage);
        

            Console.WriteLine("received");
            var jsonData = JsonConvert.SerializeObject(images);
            File.WriteAllText("images.json", jsonData);
        }


    }
    }


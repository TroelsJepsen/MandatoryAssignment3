using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace MandatoryAssignment
{
    public class TextHandler
    {
        public static String[] getText()
        {
            List<String> text;
            using (StreamReader reader = new StreamReader("text.json"))
            {
                String jsonString = reader.ReadToEnd();
                text = JsonConvert.DeserializeObject<List<String>>(jsonString);
            }
            return text.ToArray();
        }

        public static void addText(String newText)
        {
            List<String> text = new List<string>();
            text.Add(newText);

            var jsonData = JsonConvert.SerializeObject(text);
            File.WriteAllText("text.json", jsonData);
        }


    }
}


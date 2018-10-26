package com.dbsrcnn.web.rest; 

import com.dbsrcnn.domain.Convert;
import com.dbsrcnn.service.ConvertService;
import com.dbsrcnn.persistence.ConvertRepository;



import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.multipart.MultipartFile;
import java.sql.Blob;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.hibernate.Hibernate;
import org.hibernate.HibernateException;
import org.json.simple.JSONObject;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import org.springframework.util.FileCopyUtils;



import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
import java.sql.Blob;
import java.sql.SQLException;

import javax.servlet.http.HttpServletResponse;


@Controller("ConvertRestController")
public class ConvertRestController {
	



    @RequestMapping(value="/Image/Convert", method=RequestMethod.POST, headers = "content-type=multipart/*" )
    @ResponseBody
    public void  saveImage(HttpServletResponse response, @RequestParam("file") MultipartFile inputfile, @RequestParam("image") String image) throws IOException, ParseException, SQLException{
    	/*System.out.println(imageStr);
        Convert image = new Convert();
        try {
            ObjectMapper mapper = new ObjectMapper();
            image = mapper.readValue(imageStr, Convert.class);
         } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }       

        try
        {
           Blob blob = Hibernate.getLobCreator(sessionFactory.openSession()).createBlob(file.getInputStream(), file.getSize());
            image.setImage(blob);
        } catch (HibernateException e) {
             e.printStackTrace();
        }
           catch (IOException e) {
		      e.printStackTrace();
		}
       
        image = convertService.saveImage(image,1);*/
    	
    	
    	JSONParser parser = new JSONParser(); 
    	JSONObject jsonObjectOfImage = (JSONObject) parser.parse(image);
    	

    	System.out.println("I am here");
        
   
        

        String fileName = (jsonObjectOfImage.get("fileName")).toString();
        String fileType = (jsonObjectOfImage.get("fileType")).toString();
        String fileSize = (jsonObjectOfImage.get("fileSize")).toString();
        try
        {
          //Blob imageBlob = Hibernate.getLobCreator(sessionFactory.openSession()).createBlob(inputfile.getInputStream(), inputfile.getSize());
           
          System.out.println(fileName);
   		  System.out.println(fileType);
   		  System.out.println(fileSize);
   		  //System.out.println(imageBlob);
   		  response.setContentType(fileType);
   		  response.setHeader("Content-Disposition", String.format("inline; filename=\"" + fileName +"\""));
   		  response.setContentLength(Integer.parseInt(fileSize));
          
   		  byte [] byteArr=inputfile.getBytes();
   		  InputStream inputStream = new ByteArrayInputStream(byteArr);
   		  
   		  
   		  FileCopyUtils.copy(inputfile.getInputStream(), response.getOutputStream());
           //imageBlob.free();

        } catch (HibernateException e) {
             e.printStackTrace();
        }     
		
        
		
    }






}

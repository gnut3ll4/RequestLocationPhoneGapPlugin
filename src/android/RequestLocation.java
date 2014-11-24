package com.gnut3ll4.requestlocation;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import android.app.Activity;
import android.content.Intent;
import android.location.LocationManager;

public class RequestLocation extends CordovaPlugin {

	public static final String ACTION_CHECK_LOCATION_ENABLED = "isLocationEnabled"; 
	public static final String ACTION_ENABLE_LOCATION = "enableLocation";
	
	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		
		
		try {
		    if (ACTION_CHECK_LOCATION_ENABLED.equals(action)) { 
		    	
		    	
		    	LocationManager locationManager = (LocationManager) getSystemService(LOCATION_SERVICE);
		        if(!locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER )) {
		            Intent calIntent = new Intent( Settings.ACTION_LOCATION_SOURCE_SETTINGS );
		            this.cordova.getActivity().startActivity(calIntent);
					callbackContext.success();
					return true;
		        }
		 
		    } else if( ACTION_ENABLE_LOCATION.equals(action)) {
		    	
		    	
		    }
		    
		    callbackContext.error("Invalid action");
		    return false;
		    
		} catch(Exception e) {
		    System.err.println("Exception: " + e.getMessage());
		    callbackContext.error(e.getMessage());
		    return false;
		} 
		
		
	}
}
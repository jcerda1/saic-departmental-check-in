exports.findById = (req, res) => {
  res.json({
    "totalSize": 1,
    "done": true,
    "records": [
        {
            "attributes": {
                "type": "Contact",
                "url": "/services/data/v20.0/sobjects/Contact/003Q000001ASf1aIAD"
            },
            "Name": "Nicholas Havens",
            "Email": "nhaven@saic.edu",
            "EMPLIDPeoplesoftKey__c": "7000428",
            "Id": "003Q000001ASf1aIAD"
        }
      ]
    });
};
const PrinterService =
{

mode: localStorage.getItem("printMode") || "SHARE",


setMode(value)
{

    this.mode=value;

},


async print(receipt)
{

    if(this.mode==="SHARE")
    {

        await MobilePrinter.print(receipt);

    }
    else if(this.mode==="BROWSER")
    {

        await BrowserPrinter.print(receipt);

    }

}


};

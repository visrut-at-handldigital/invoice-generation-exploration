import puppeteer from "puppeteer";
import fs from "fs";

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const content = fs.readFileSync("invoice.html", "utf8");
  await page.setContent(content);

  await page.pdf({ path: "invoice.pdf", format: "A4" });

  await browser.close();
}

generatePDF();

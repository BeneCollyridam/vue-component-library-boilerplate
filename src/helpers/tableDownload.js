import XlsxPopulate from 'xlsx-populate';
import FileSaver from 'file-saver';

export default async (tableData, tableMetaData) => {
  let wb = await XlsxPopulate.fromBlankAsync();
  wb.sheet('Sheet1').cell('A1').value(tableData);
  Object.keys(tableMetaData).forEach(
    ( key ) => {
      wb.sheet('Sheet1')
        .cell(key)
        .style('fill', tableMetaData[key]);
  });

  const headers = this.hotRef.current.hotInstance.getColHeader();
  headers.forEach((el, key) => {
    const len = tableData[0][key].length + 1; // Magic constant to make text fit in column
    wb.sheet('Sheet1').column(el).width(len);
  });

  const blob = await wb.outputAsync(new Blob());
  FileSaver.saveAs(blob, 'test.xlsx');
};

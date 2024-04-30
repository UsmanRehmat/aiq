export class PaginationHelper {
  getOffset(page: number, pageSize: number): number {
    return Math.abs(page - 1) * pageSize;
  }

  formatPaginationResponse(
    currentPage: number,
    pageSize: number,
    dataItemsTotalCount: number,
    data: Array<any>,
  ) {
    return {
      total: dataItemsTotalCount,
      currentPage: +currentPage,
      perPage: +pageSize,
      pages: Math.ceil(dataItemsTotalCount / pageSize),
      data,
    };
  }
}

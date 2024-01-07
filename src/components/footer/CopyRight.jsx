export default function CopyRight() {
  return (
    <div className="copyright bg-[#dadada]">
      <div className="container mx-auto">
        <div className="py-3">
          <div className="text-center text-[#424242] text-[14px]">
            <p>
              Copy right &copy;
              <a
                // FIXME: href="https..."
                href="https..."
                className="transition-all duration-500 hover:text-brand_color"
              >
                {' '}
                Safzon
                {' '}
              </a>
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
